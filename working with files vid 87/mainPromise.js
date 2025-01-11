import fs from "fs/promises"

let a = await fs.readFile("Kshitij2.txt");

let b = await fs.appendFile("Kshitij.txt", "\n\n\n\nthis is amazing promise");

console.log(a.toString(), b);