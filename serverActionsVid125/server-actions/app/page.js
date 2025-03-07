"use client"
import { submitAction } from "@/actions/form"
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>

          <label htmlFor="name">Name</label>{" "}
          <input name="name" id="name" type="text" className="rounded-xl border-3 border-cyan-500 focus:border-amber-600 focus:outline-3 focus:text-blue-600 bg-white text-black" />

        </div>
        <br />
        <div>
          <label htmlFor="add">Address</label>{" "}
          <input name="add" id="add" type="text" className="rounded-xl border-3 border-cyan-500 focus:border-amber-600 focus:outline-3 focus:text-blue-600 bg-white text-black" />
        </div>
        <br />
        <div>
          <button className="border border-white px-3 cursor-pointer hover:border-red-600 rounded-3xl">Submit</button>
        </div>
      </form>
    </div>

  );
}
