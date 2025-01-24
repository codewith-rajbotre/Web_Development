import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name :{type : String , required:true, default :"Hey"},
    isValid : Boolean,
    dept : String
})

export const Employee =mongoose.model('Employee',EmployeeSchema)