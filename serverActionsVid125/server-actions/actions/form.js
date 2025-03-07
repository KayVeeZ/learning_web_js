"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
    await console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("kshitij.txt", `Name is ${e.get("name")} and address is ${e.get("add")}`)
  }