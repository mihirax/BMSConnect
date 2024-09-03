const mongoose=require("mongoose")
const StudentSchema=new mongoose.Schema({
    name:String,
    usn:String,
    email: String,
    password:String,
    confirmPassword:String
})
const StudentModel=mongoose.model("student",StudentSchema)
module.exports = StudentModel
