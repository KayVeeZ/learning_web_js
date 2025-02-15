import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar'

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      try {
        let todos = JSON.parse(todoString);
        setTodos(todos);
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error.message);
        setTodos([]);
      }
    }
  }, []);

  // useEffect(() => {
  //  console.log(todos)
  // }, [todos])




  const handleSave = () => {
    const newId = uuidv4();
    const newTodos = [...todos, { id: newId, todo, isCompleted: false }];
    setTodo("");
    // console.log(uuidv4());
    setTodos(newTodos);
    console.log(newTodos);
    saveToLS(newTodos);
  };

  const handleEdit = (e, id) => {

    // let index = todos.findIndex(item =>{return item.id === id;});
    // setTodo(todos[index].todo);

    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);

    const newTodos = todos.filter(item => {
      return item.id != id;
    })
    setTodos(newTodos);
    saveToLS(newTodos);
  };

  const handleDelete = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    if (confirm(`Are you sure you would like to delete task ${todos[index].todo}?`)) {
      const newTodos = todos.filter(item => {
        return item.id != id;
      })
      setTodos(newTodos);
      saveToLS(newTodos);
    }
    else { }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    // console.log(a.id);
    saveToLS();
  };

  const saveToLS = (newTodos = todos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  }




  return (
    <>
      <Navbar />
      <div className="mx-3 container md:mx-auto my-5 rounded-xl py-5 bg-violet-100 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center text-3xl'>iTask - Manage your tasks at one place</h1>
        <div className="addTodo my-5 mx-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>
            Add a Task
          </h2>
          <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className='bg-violet-50 focus:bg-white rounded-full px-5 py-1 task-input w-[50%] focus:w-[90%] transition-all' />
            <button onClick={handleSave} disabled={todo.length <= 3} className='absolute right-100 top-46 mx-2 cursor-pointer bg-violet-800 hover:bg-violet-950 disabled:bg-blue-100 p-4 py-2 text-sm font-bold text-white rounded-full transition-all'>Save</button>
          </div>
        </div>
        <input className='my-4' id="show" onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className="mx-2" htmlfor="show">Show Finished</label>
        <div className="h-[1px] w-[90%] mx-auto my-2 bg-black opacity-25"></div>

        <h2 className='mx-5 text-2xl font-bold'>
          Your Tasks
        </h2>
        <div className="mx-5 todos">
          {/* if number of todo elements inside todos array is 0 */}
          {todos.length === 0 && <div className='m-5'>No Tasks to Display</div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
              <div className="flex gap-5">
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""} >{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1 transition-all'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1 transition-all'><AiFillDelete /></button>
              </div>

            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
