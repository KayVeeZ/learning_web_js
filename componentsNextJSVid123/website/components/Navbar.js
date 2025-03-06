import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 bg-slate-800 text-white py-4">
    <div className='logo font-bold'>Facebook</div>
    <ul className="flex gap-2 text-sm">
        <Link href="/" ><li>Home</li></Link>
        <Link href="/about" ><li>About</li></Link>
        <Link href="/contact" ><li>Contact us</li></Link>
    </ul>
    </nav>
  )
}

export default Navbar
