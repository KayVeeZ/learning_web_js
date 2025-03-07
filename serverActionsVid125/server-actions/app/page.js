import fs from "fs/promises"
import { console } from "inspector";

export default function Home() {
  const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("kshitij.txt", `Name is ${e.get("name")} andd address is ${e.get("add")}`)
    console.log(a)
  }

  return (
    <div className="w-2/3 mx-auto my-12">
      <form action="submitAction">
        <div>

          <label htmlFor="name">Name</label>{" "}
          <input name="name" id="name" type="text" className="rounded-xl border-3 border-cyan-500 focus:outline-amber-600 focus:outline-3 focus:text-blue-600 bg-white text-black" />

        </div>
        <br />
        <div>
          <label htmlFor="add">Address</label>{" "}
          <input name="add" id="add" type="text" className="rounded-xl border-3 border-cyan-500 focus:outline-amber-600 focus:outline-3 focus:text-blue-600 bg-white text-black" />
        </div>
        <br />
        <div>
          <button className="border border-white px-3 cursor-pointer hover:border-red-600 rounded-3xl">Submit</button>
        </div>
      </form>
    </div>

  );
}
