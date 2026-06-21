const express = require("express")
const app = express()
const {uploadFileOnDisck} = require("./multer")

app.post("/file",uploadFileOnDisck.single("image"),async(req,res,next)=>{
    try{
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

app.use((err,req,res,next)=>{
    console.log(err)
    res.json({
        message:err.message
    })
})

app.listen(3000,()=>console.log("Server is running on port 3000"))