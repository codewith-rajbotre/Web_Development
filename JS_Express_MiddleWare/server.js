const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

app.use('/blog', blog)
app.use(express.static("public"))


//MiddleWare

app.use((req,res,next)=>{
    console.log("MiddleWare 1")
    console.log(`${Date.now()}  is a ${req.method}`)
    req.jara = "Hello I am Here"
    // fs.appendFileSync("logic.txt", `${Data.now} is a ${req.method}`)
    next()
})
app.use((req,res,next)=>{
  
    console.log("MiddleWare 2")
    next()
})

app.get('/',(req , res)=>{
    console.log("Get Request")
    res.send("Hello Guys welcome to express Session"+ req.jara)
})
app.listen(port,()=>{
    console.log(`We are listning on port ${port}`)

})