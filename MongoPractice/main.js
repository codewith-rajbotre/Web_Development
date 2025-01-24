// import mongoose from 'mongoose';
import Todo from "./Models/todo.js";
const express = require('express');
const mongoose =require('mongoose');

(async () => {
   
      const connection = await mongoose.connect('mongodb://localhost:27017/todo', {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
 }
)();
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    const todo = new Todo({title:"The title is todo", desc:"Description of the todo",isDone : false })
    todo.save()
    res.send("Hello world!!!")
   
})

app.listen(port, ()=>{
     console.log(`listening on the port ${port}`)
})