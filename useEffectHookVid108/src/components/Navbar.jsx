import React from 'react'
import { useEffect } from 'react'
const Navbar = ({color}) => {
    // Case 1; Run on every render
      useEffect(() => {
        alert("Will run on every render");
      });
    
      // Case 2: Run only on first render
      useEffect(() => {
        alert("Hey welcome to my page!This is first render");
      }, []);
    
      // Case 3: Run only when certain values change
      useEffect(() => {
        alert("Hey i am running because color has changed");
      }, [color]);


    //   Example case of unmounting
      useEffect(() => {
        alert("Hey");

        return () =>{
            alert("Component was unmounted");
        }
      }, []);

    return (
    <div>
      I am Navbar of {color} color hehe
    </div>
  )
}

export default Navbar