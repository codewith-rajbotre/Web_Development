import React,{useEffect} from 'react'

const Navbar = ({color}) => {

    useEffect(()=>{
          alert("Welcome to my Navbar Main page Rendering On")
        })
    useEffect(() => {
          alert("Hello , I am from Navbar ,Color was changed")
      
    }, [color])
    
  return (
    <div>I am Navbar of {color}...</div>
  )
}

export default Navbar