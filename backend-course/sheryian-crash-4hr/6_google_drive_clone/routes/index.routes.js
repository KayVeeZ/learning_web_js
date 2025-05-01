import express from 'express';
import fs from 'fs';
import s3 from '../src/config/filebase.config.js';
import upload from '../src/middleware/uploadMiddleware.js';
import fileModel from '../src/models/files.model.js'
import authMiddleware from '../src/middleware/auth.js';
import { console } from 'inspector/promises';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {

  const userFiles = await fileModel.find({
    user: req.user.userId
  });

  console.log(userFiles);

  res.render('home', {
    files: userFiles
  });
}
)

router.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded.' });

  const fileContent = fs.readFileSync(file.path);
  console.log(req.file);
  // Unique key for S3, use `file.filename` or `file.originalname`
  const params = {
    Bucket: process.env.FILEBASE_BUCKET,
    Key: file.filename, // Use `file.filename` for a unique key in S3
    Body: fileContent,
    ContentType: file.mimetype,
    ACL: 'public-read',
  };

  s3.upload(params, async (err, data) => {
    fs.unlinkSync(file.path); // delete the temporary file after uploading
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'File upload failed.' });
    }

    // Store the file in MongoDB with the correct S3 key
    const newFile = await fileModel.create({
      path: file.filename, // Store the S3 key here (not the local path)
      originalname: file.originalname,
      user: req.user.userId,
    });

    res.json(newFile);
  });
  console.log(req.file);
});


router.get('/download/:path', authMiddleware, async (req, res) => {
  console.log('Download route hit');  // Log to verify that the route is hit
  
  const loggedInUserId = req.user.userId;
  const path = req.params.path;  // Get the S3 key from URL parameter

  console.log('Requested file path:', path);

  // Find the file in the database using the stored S3 key (not the local path)
  const file = await fileModel.findOne({
    user: loggedInUserId,
    path: path,  // Match the S3 key
  });

  if (!file) {
    return res.status(401).json({ message: "Unauthorized access to the file." });
  }

  try {
    // Generate a signed URL to allow temporary access to the file from S3
    console.log('Key for signed URL:', file.path);
    const signedUrl = await s3.getSignedUrlPromise('getObject', {
      Bucket: process.env.FILEBASE_BUCKET,
      Key: file.path, // Use the S3 key stored in MongoDB
      Expires: 3600,  // URL expiration (1 hour)
    });

    // Redirect the user to the signed URL for file download
    res.redirect(signedUrl);
  } catch (err) {
    console.error('Error generating signed URL:', err);
    res.status(500).json({ error: 'Failed to generate signed URL.' });
  }
});




export default router;