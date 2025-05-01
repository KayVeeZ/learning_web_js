import AWS from 'aws-sdk';

import dotenv from 'dotenv';

dotenv.config();
console.log("Loaded credentials:", process.env.FILEBASE_KEY, process.env.FILEBASE_SECRET);
// Filebase config
const s3 = new AWS.S3({
  endpoint: 'https://s3.filebase.com',
  accessKeyId: process.env.FILEBASE_ACCESS_KEY,
  secretAccessKey: process.env.FILEBASE_SECRET_KEY,
  region: 'us-east-1', // Filebase uses this region
});

export default s3;
