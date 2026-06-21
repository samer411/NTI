const express=require('express')
const app=express()
const {uploadfileondisk}=require('./multer')
const dotenv = require("dotenv").config({path:"./.env"})
const {uploadfilecloud}=require("./multer")
const cloudinary=require("./cloudinary").v2

app.post("/file",uploadfileondisk.single("image"),async(req,res,next)=>{
    try{
         const filepath=req.file.path
         await cloudinary.uploader.upload(filepath,{folder:"images",resource_type:"image"})
         /// user===>req===multer==== memory==>ram====>cloudinary
        res.json({
        msg:"image uploaded Done",
        url:req.file.path,
        name:req.file.filename
    })
    }catch(err){next(err)}
})
app.post("/files",uploadfileondisk.array("images",4),async(req,res,next)=>{
   try {
     res.json({
        msg:"images uploaded Done",
        files:req.files
    })
    
   } catch (error) {
    next(error)
    
   }
})
app.post("/cloud",uploadfilecloud.single("image"),async(req,res,next)=>{
    try {
     res.json({
        msg:"images uploaded Done",
        files:req.file,
        url:req.file.path
    })
    
   } catch (error) {
    next(error)
   }
})
app.use((err,req,res,next)=>{
    console.log(err)
    res.json({msg:err.message})
})
app.listen(3000,()=>console.log("server is running on port 3000"))

//100k===>2+>5mb===>250G 
//cloudinary