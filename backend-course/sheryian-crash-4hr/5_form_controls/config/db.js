import mongoose from "mongoose";

const connection = mongoose.connect('mongodb://0.0.0.0/men').then(()=>{
    console.log('Connected to database...')
});

export default connection;