const express = require("express")
const router = express.Router();
const Course = require("../models/course.model")
const authenticateMiddleware = require("../middlewares/authenticate.middleware")
const deleteCourseMiddleware = require("../middlewares/deleteCourse.middleware")

router.post("/create",authenticateMiddleware,async(req,res)=>{
    const course = req.body;
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
router.get("/getAllCourses",authenticateMiddleware,async(req,res)=>{
    const courses = await Course.find()
    res.status(200).json({message:"This is All Course",courses:courses})
})
 router.delete("/delete/:id",deleteCourseMiddleware,async(req,res)=>{
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Course Deleted Successfully",DeletedCourse:deletedCourse})
 })

module.exports = router;