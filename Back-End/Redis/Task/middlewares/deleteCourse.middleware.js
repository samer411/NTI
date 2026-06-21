const Student = require("../models/student.model")
const Course = require("../models/course.model")
module.exports = async function(req,res,next){
    const foundStudent = await Student.findOne({email:req.session.student.email})
    const foundCourse = await Course.findById(req.params.id);
    if(foundStudent._id.equals(foundCourse.ownerId)){
        next()
    }
    else{
        res.status(403).json({message:"You are not autherized to delete this course"})
    }
}