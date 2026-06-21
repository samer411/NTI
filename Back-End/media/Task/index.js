const express = require("express")
const app = express()
const {uploadFileOnDisck} = require("./multer")
require("dotenv").config()
const {uploadFileCloud} = require("./multer")
const cloudinary = require("cloudinary").v2
const mongoose =require("mongoose")
const User = require("./models/user.model")
mongoose.connect("mongodb://127.0.0.1:27017/media")
.then(()=>{console.log("MongoDb Connected Successfully")})
.catch((err)=>{console.log(err)})
app.post("/file",uploadFileOnDisck.single("image"),async(req,res,next)=>{
    try{
        const filePath = req.file.path
        await cloudinary.uploader.upload(filePath,{folder:"Images",resource_type:"image"})
        res.json({
        message:"Image Uploaded",
        url:req.file.path,
        name:req.file.filename
    })
    }
    catch(err){
        next(err)
    }
  

})
app.post("/files",uploadFileOnDisck.array("images",3),async(req,res,next)=>{
    try{
        res.json({
            message:"Images Uploaded",
            files:req.files
        })
    }catch(err){
        next(err);
    }
})
app.post("/cloud-single",uploadFileCloud.single("image"),async(req,res,next)=>{
    try{
        res.json({
        message:"Images Uploaded to Cloud",
        files:req.files,

    })
    }catch(err){
        next(err)
    }
    
})
app.post("/cloud-multiple",uploadFileCloud.array("images",3),async(req,res,next)=>{
    try{
        res.json({
        message:"Images Uploaded to Cloud",
        files:req.files,

    })
    }catch(err){
        next(err)
    }
    
})
app.post("/register",uploadFileCloud.single("image"),async(req,res,next)=>{
    const {userName,email} = req.body;
    const user =  User({
        userName:userName,
        email:email,
        imageUrl:req.file.path
    })
    await user.save()
    res.status(201).json({message:"User Register Done"})

})

app.use((err,req,res,next)=>{
    console.log(err)
    res.json({
        message:err.message
    })
})

app.listen(3000,()=>console.log("Server is running on port 3000"))