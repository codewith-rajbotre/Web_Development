const express = require('express')
const { prototype } = require('node:module')
const app = express()
const port = 3000
app.use(express.static("public"))
app.get('/', (req , res)=>{
    res.send("Hello World")
})
app.post('/',(req, res)=>{
   console.log("We are trying post request")
   res.send("Hello world POST")
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})