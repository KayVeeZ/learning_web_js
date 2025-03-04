"use client"
import React from 'react'
import { useState } from 'react';
const Navbar = (props) => {
    const [count, setCount] = useState(props.counter);
  return (
    <>
    <div className='flex'>
    <button onClick={()=>{count>0?(setCount(count-1)):null}} className='border-violet-300 border-2 bg-blue-600 rounded-full'>-</button>Count is {count}<button onClick={()=>{setCount(count+1)}} className='border-violet-300 border-2 bg-blue-600 rounded-full'>+</button>
    </div>
    </>
    
  )
}

export default Navbar
