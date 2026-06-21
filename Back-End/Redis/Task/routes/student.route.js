const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");
const bcrypt = require("bcrypt")


// ******************************************************************
router.post("/register", async (req, res) => {
  const student = req.body;
  console.log(req.body);
  const existingUser = await Student.findOne({email:student.email});
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "This Student is Already in the database" });
  }
//*******************************************************************
  const newStudent = new Student({
    name: student.name,
    email: student.email,
    password: student.password,
  });
  await newStudent.save();
  res.status(201).json({
    message: "Student is Registered Successfully ",
    Student: {
      name: student.name,
      email: student.email,
      password: student.password,
    },
  });
});
router.post("/login",async(req,res)=>{
    const student = req.body
    const foundStudent = await Student.findOne({email:student.email})
    if(foundStudent){
        console.log(student.password)
        console.log(foundStudent.password)
        const b = await bcrypt.compare(student.password,foundStudent.password)
        if(b){
            res.status(200).json({message:"User Logged In Successfully"})
        }
    }
    res.status(200).json({message:"User Found"})

})

module.exports = router;
