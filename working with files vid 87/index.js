const fs = require("fs");
// const fs = require("fs/promises");

// console.log(fs);

console.log("starting");

fs.writeFileSync("kshitij.txt","Kshitij is Batman");
fs.writeFile("kshitij2.txt","writing with async callback", ()=>{
    console.log("done");
    fs.readFile("Kshitij2.txt", (error,data)=>{
        console.log(error, data.toString());
    });
});

fs.appendFile("kshitij2.txt","\nappending",(e,d)=>{
     console.log(d);
});

console.log("ending");