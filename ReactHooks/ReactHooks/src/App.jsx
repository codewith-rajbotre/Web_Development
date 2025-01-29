import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [a , setCounter] = useState(2)

  return (
    <>
    <div>The count is {count}</div>
    <button onClick={()=>{{setCount(count+1)}}}>Update Count</button>
      
<p>This is a counter that doubles the Value when you click on the "Click Me" Button</p>
<div>The Double Counter is  {a}</div>
<button onClick={()=>{{setCounter(a**2)}}}>Click Me</button>

    </>
  )
}

export default App
