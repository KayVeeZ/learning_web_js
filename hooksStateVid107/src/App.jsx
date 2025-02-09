import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>The count is {count}</div>
        <button onClick={()=>{setCount(count + 1)}}>Update Count</button>
      </div>
    </>
  )
}

export default App
