import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'

let changeval = (setValue,value)=>{
  setValue (value + 1);
  };

function App() 
{
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <NavBar logoText= "Kshitij is Awesome"/>
      <img src = {reactLogo}/>
      <div className="value">{value}</div>
      <button onClick={() => changeval(setValue,value)}>Click Me</button>
      <Footer/>
    </div>
      );
}



export default App
