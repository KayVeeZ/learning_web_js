import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Kshitij");
  // const [form, setForm] = useState({email: "", phone: ""});
  const [form, setForm] = useState({});

  const handleClick = ()=>{
    alert("Hey I am clicked!");
  }
  
   const handleMouseOver = ()=>{
    alert("Hey I am over the red div");
   }

   const handleChange = (e)=>{
    // setName(e.target.value);
    setForm({...form, [e.target.name]:e.target.value});
    console.log(form);
   }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>Hey I am red</div> */}

      <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  )
}

export default App
