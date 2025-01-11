import path from "path";

let myPath ="C:\\codes\\js\\working with files vid 87\\ks.txt"; // this file does not need to exist

console.log(path.extname(myPath));

console.log("this is dir",path.dirname(myPath));

console.log(path.basename(myPath));

console.log(path.join("c:/", "programs\\abcd"));
