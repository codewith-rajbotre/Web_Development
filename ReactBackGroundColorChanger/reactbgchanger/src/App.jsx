import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>React Background Color Changer Application</h1>
    <button className='bg-blue-500'>Red</button>
    <button>Yellow</button>
    <button style={{backgroundColor:"pink"}}>Pink</button>
    <button>Black</button>
    <button>White</button>
    <button>Violet</button>
    <button>Green</button>
    <button>Orange</button>
    <button>Gray</button>
    </>
  )
}

export default App
