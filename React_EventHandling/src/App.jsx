import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Mahesh")
  const [from, setfrom] = useState({email:"", phone:""})
  const HandleClick=()=>{
    alert("Hey I am clicked..")
  }
  const red  =()=>{
    alert("Mouse Passed YO YO")
  }
  const handleChange=(e)=>{
      setfrom({...from, [e.target.name]:e.target.value})
  }

  return (
    <>
         <div className="button">
                 <button onClick={HandleClick}>Click Here</button>
         </div>
         <div className="red" onMouseOver={red}>
          I am DIV
         </div>
         <input type="text" name="email" value={from.email?from.email:""} onChange={handleChange}/>
         <input type="text" name="phone" value={from.phone?from.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
