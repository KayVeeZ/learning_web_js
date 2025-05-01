import express from 'express';
import fs from 'fs';
import s3 from '../src/config/filebase.config.js';
import upload from '../src/middleware/uploadMiddleware.js';
import fileModel from '../src/models/files.model.js'
import authMiddleware from '../src/middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, async (req,res) => {

  const userFiles = await fileModel.find({
    user: req.user.userId
  });

  console.log(userFiles);

  res.render('home',{
    files: userFiles
  });
}
)

router.post('/upload', authMiddleware, upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded.' });

  const fileContent = fs.readFileSync(file.path);

  const params = {
    Bucket: process.env.FILEBASE_BUCKET,
    Key: file.originalname,
    Body: fileContent,
    ContentType: file.mimetype,
    ACL: 'public-read',
  };

  s3.upload(params, async (err, data) => {
    fs.unlinkSync(file.path); // delete temp file
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'File upload failed.' });
    }
    // res.json({ message: 'File uploaded successfully!', url: data.Location });
    // res.send(req.file);
    const newFile = await fileModel.create({
      path: req.file.path,
      originalname: req.file.originalname,
      user: req.user.userId
    });

    res.json(newFile);
  });
});



export default router;