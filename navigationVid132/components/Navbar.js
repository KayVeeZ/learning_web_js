"use client"
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    let fin_path;
  return (
    <div>
        <div>
            Navbar
        </div>
        <div>You are inside {fin_path = pathname?.length > 1 ? pathname.slice(1) : "home"}</div>
    </div>
  )
}

export default Navbar
