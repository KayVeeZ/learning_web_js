const { createServer } = require('node:http');
const fs = require('fs');
const a = require('./mymodule2.js');

// import http from "http"
// import {a} from "./mymodule.js"
// import obj from "./mymodule.js"
// import harry from "./mymodule.js" // as obj is deafult export even harry defaults to obj

// console.log(a,obj, harry);
console.log(a, __dirname, __filename);
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World </h1><br>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});