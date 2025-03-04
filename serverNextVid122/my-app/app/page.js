import fs from "fs/promises"
import Navbar from "@/app/components/Navbar";

export default function Home() {
  console.log("Hey i am Kshitij");
  let count = 0;
  let a = fs.readFile(".gitignore");
  a.then(e => {
    console.log("beginning of log");
    console.log(e.toString());
    console.log("end of log");
  }
  );
  return (
    <div>
      <Navbar counter={count}/>
    </div>
  );
}
