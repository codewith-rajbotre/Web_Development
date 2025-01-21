const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!11')
})
app.get('/about',(req,res)=>{
    res.send('About US')
})
app.get('/blog/:slug',(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send('hello ${req.params.slug')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})