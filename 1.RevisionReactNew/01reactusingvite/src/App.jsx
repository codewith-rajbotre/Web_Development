import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let counter =12;
   const addValue= ()=>{console.log(counter); counter = counter +1;};
  return (
    <>
      <h1>Hello i am here, to learn react</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add Value</button><br></br>
      <button>Remove Value</button>
    </>
  )
}

export default App
