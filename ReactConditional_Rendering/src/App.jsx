import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title:"Hey",
      desc : "I am a good todo"
    },
    {
      title: "Another todo",
      desc : "It is an another todo "
    },
    {
      title : "Special todo",
      desc : "Description of special todo"
    }
  ])
  const Todo =({todo})=>{
    return (<>
    <div className="m-4 border border-1 border-purple-400">
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </div>
    </>)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button>Showbtn is true</button>:<button>Showbtn is false</button>}
      {/* {showbtn && <button>I was shown when second button is clicked</button>} */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle ShowBtn 
        </button>

     {todos.map(todo=>{
      return<Todo key={todo.title} todo={todo}/>
     })}

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
