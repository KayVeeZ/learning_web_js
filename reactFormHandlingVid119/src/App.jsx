import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
      },d*1000);
    })
  }

  const onSubmit = async (data) =>{
    // await delay(2); // simulating network delay
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)});
    let res = await r.text()
    console.log(data, res);
    // if(data.username==="rohan"){
    //   setError("blocked",{message:"User Blocked!"});
    // }
    // else if(data.username!=="shubham"){
    //   setError("myform",{message:"Username Invalid!"});
    // }
  } 
  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {required: true, minLength:{value:3, message:"min length is 3"}, maxLength:{value:8, message:"max lengh is 8"}})} type="text" />
          <br />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input placeholder='password' {...register("password")} type="password" />
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
