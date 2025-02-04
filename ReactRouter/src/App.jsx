import Navbar from './components/Navbar'
import login from './components/login'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element :<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><login/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/About",
      element:<><Navbar/><About/></>
    },
   

  ])

  return (
    <>
       
        <RouterProvider router={router}/>
        <div>
            Hello
        </div>
       
    </>
  )
}

export default App
