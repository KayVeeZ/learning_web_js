const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const blog = require('./routes/blog');

app.use('/blog', blog);

app.use(express.static("public"));

// Middleware 1 - logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.kshitij = "I am Kshitij";
  fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`);
  // console.log(`${Date.now()} is a ${req.method}`);
  // res.send("Hacked by middleware 1"); // this will not allow further execution as response is already sent
  next(); // this needs to be commented out for further execution
});

// Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next(); // needed to give control to next middleware, will block execution of script if not used
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Us' + req.kshitij);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});