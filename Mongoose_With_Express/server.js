import mongoose from "mongoose";
import express from "express";
import { Employee } from "./models/Employee.js";

const app= express();
const port = 3000;
let conn = await mongoose.connect("mongodb://localhost:27017/Employee")

app.get('/',(req, res)=>{

    const employee = new Employee({ isValid: true , dept:"Development"})
    employee.save()
    res.send("Hello world By R")
})

app.listen(port,()=>{
    console.log(`The server is listning on port ${port}`)
})
