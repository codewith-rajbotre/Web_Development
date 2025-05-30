import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
   const [count, setCount] = useState(0)
   const [first, setfirst] = useState(0)
   const [color, setcolor] = useState(0)
 
  //case 1:Run on every Render
  // useEffect(()=>{
  //   alert("Welcome to my Main App")
  // })
  // //case 2 : Run only on first render
  // useEffect(()=>{
  //   alert("First Count was Changed")
  // },[first])
  // //case 3 : Run only when the certain value is changed .
  useEffect(()=>{
    alert("Count was Changed")
    setcolor(color+1)
  },[count])

  

  return (
    <>
    <Navbar color={"navy"+ "blue" + color}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
