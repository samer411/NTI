const express =require("express")
const router = express.Router()
const Student = require("../models/student.model")

module.exports = router.post("/register",async(req,res)=>{
    const student = req.body
    const exisitingUser = await Student.findOne({email:student.email})
    if(exisitingUser){
        return res.status(400).json({message:"This Student is already Exists"})

    }
    const newStudent = new Student({
        name:student.name,
        email:student.email,
        password:student.password
    });
    await newStudent.save();
    res.status(201).json({
        message:"User Created Successfully"
    })
})
