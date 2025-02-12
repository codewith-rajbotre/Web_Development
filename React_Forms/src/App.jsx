import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {
  const{
    register,
    handleSubmit,
    watch,
   
    formState:{errors,isSubmitting},
  } = useForm()

   const delay =(d)=>{
     return new Promise ((resolve, reject)=>{
             setTimeout(
              ()=>{
                resolve()
                
              }, d*1000);    
     })
   }


  const onSubmit =async (data) =>
    { 
      //await delay(4)
      let r = await  fetch("http://localhost:3000" , {method:"POST", headers : {"Content-Type":"application/json"},body: JSON.stringify(data)})
      let res = await r.text()
      console.log(data , res)

    } 


  return (

    <>
      {isSubmitting &&<div>Loading...</div>}
        <div className="container">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username",  {required :true, minLength:{value:3 ,message:"Min Length is 3"} , maxLength: {value:8 ,message:"Max Length is 8"}} )}type="text" placeholder='Username'/>
            {errors.username && <div>{errors.username.message}</div> }
            <br />
            <input {...register("password",{required:true , minLength:{value :8 , message:"Password Must be 8 charactors Long"}})}type="password" placeholder='password' />
            {errors.password && <div>{errors.password.message}</div>}
            <br />
            <input disabled={isSubmitting} type="submit" name="Sumbit"/>
          </form>
        </div>
    </>
  )
}

export default App
