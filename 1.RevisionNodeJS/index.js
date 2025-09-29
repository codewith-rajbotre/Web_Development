const express = require("express");
const app= express();
const PORT = 3000;

app.get("/",(req, res)=>{
    res.send("HEllo i am here");
})

app.listen(PORT,()=>{
    console.log("Running on 3000")
})