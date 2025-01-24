const express = require('express')
const app = express()
const port = 3000

//EJS Template Engine
app.set('view engine', 'ejs');

app.get('/',(req , res)=>{
    let siteName ="Adidas"
    let searchText = "Search Now"
    // res.sendFile("templates/index.html",{root : __dirname})
    res.render("index",{siteName:siteName , searchText: searchText})

})
app.get('/blog/:slug',(req,res)=>{
    let blogTitle = "Adidas why and when ?"
    let blogContent = "Its a very good brand"
    
    res.render("templates/blogpost.html",{blogTitle:blogTitle , blogContent:blogContent})
})
app.get('/about',(req, res)=>{
    res.send("This code is about HTML Pages")
})

app.listen(port , ()=>{
    console.log(`The sever was listening on port ${port}`)
})