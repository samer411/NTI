const express = require("express")
const router = express.Router();
const Course = require("../models/course.model")

router.post("/create",async(req,res)=>{
    const course = req.body;
    console.log(course)
    const newCourse = Course({
        title:course.title,
        description:course.description,
        ownerId:course.ownerId
    })
    await newCourse.save();
    res.status(201).json({
        message:"Course Created Successfully",
        Course:{
            title:course.title,
        description:course.description,
        ownerId:course.ownerId
        }
    }
    ) 
})

module.exports = router;