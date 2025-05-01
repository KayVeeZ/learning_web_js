import express from 'express';
import fs from 'fs';
import s3 from '../src/config/filebase.config.js';
import upload from '../src/middleware/uploadMiddleware.js';
import fileModel from '../src/models/files.model.js'
import authMiddleware from '../src/middleware/auth.js';
import { console } from 'inspector/promises';
import axios from 'axios';

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
  console.log('Download route hit');

  const loggedInUserId = req.user.userId;
  const requestedFilePath = req.params.path;
  console.log('Requested file path:', requestedFilePath);

  try {
      const file = await fileModel.findOne({
          user: loggedInUserId,
          path: requestedFilePath,
      });

      if (!file) {
          return res.status(401).json({ success: false, error: 'Unauthorized access to the file.' });
      }

      console.log('Key for signed URL:', file.path);
      const signedUrl = await s3.getSignedUrlPromise('getObject', {
          Bucket: process.env.FILEBASE_BUCKET,
          Key: file.path,
          Expires: 3600,
      });

      console.log('Generated signed URL:', signedUrl);

      // Set the Content-Disposition header to force download
      res.setHeader('Content-Disposition', `attachment; filename="${file.originalname}"`);
      res.redirect(signedUrl);

  } catch (error) {
      console.error('Error generating signed URL:', error);
      res.status(500).json({ success: false, error: 'Failed to generate signed URL.' });
  }
});

router.post('/delete/:fileId', authMiddleware, async (req, res) => {
  const fileId = req.params.fileId;
  const userId = req.user.userId;

  try {
      // Find the file in the database
      const file = await fileModel.findById(fileId);

      if (!file) {
          return res.status(404).json({ success: false, error: 'File not found.' });
      }

      // Verify that the user owns the file
      if (file.user.toString() !== userId) {
          return res.status(403).json({ success: false, error: 'Unauthorized to delete this file.' });
      }

      // Delete the file from Filebase
      const deleteParams = {
          Bucket: process.env.FILEBASE_BUCKET,
          Key: file.path, // Assuming 'file.path' stores the S3 key (file.filename)
      };

      await s3.deleteObject(deleteParams).promise();

      // Delete the file record from MongoDB
      await fileModel.findByIdAndDelete(fileId);

      res.json({ success: true, message: 'File deleted successfully.' });

  } catch (error) {
      console.error('Error deleting file:', error);
      res.status(500).json({ success: false, error: 'Failed to delete file.' });
  }
});




export default router;