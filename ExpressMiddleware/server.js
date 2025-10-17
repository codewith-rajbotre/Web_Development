const express = require('express');
const app = express()

app.listen(3000)

app.use(logger);

app.get('/', (req,res)=>{
    console.log("server running ....");
    res.send("Server runnig ....")
})

function logger(req, res,next){
    console.log("Logger file ");
   next();
}