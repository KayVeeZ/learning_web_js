import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setshowBtn] = useState(true);
  const [todos, setTodos] = useState([]);

  const serverUrl = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(serverUrl);
      const data = await response.json();
      setTodos(data);
    }
    fetchTodos();
  }, [serverUrl]);

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {todos.map(todo => {
        return (
          <div key={todo.id} className="card m-4 border border-1 border-purple-400">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.body}</div>
          </div>
        );
      })}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
