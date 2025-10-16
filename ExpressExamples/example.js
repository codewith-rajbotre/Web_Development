const express = require('express')
const app = express()

app.listen(3000)

app.get('/',(req,res)=>{
    console.log("The application is running...");
    res.send("The response is found");
})