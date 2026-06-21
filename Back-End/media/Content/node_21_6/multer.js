const multer=require('multer');
const {CloudinaryStorage}=require("multer-storage-cloudinary")
const cloudinary=require('./cloudinary')
const diskstorge=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload/")
    },
    filename:(req,file,cb)=>{
        const filename=Date.now()+file.originalname
        cb(null,filename)
    }
})

// const memorystorge=multer.memoryStorage({})
const storagecloud= new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"mansoura/images"
    }
    
})
const uploadfilecloud=multer({storage:storagecloud})
const uploadfileondisk=multer({storage:diskstorge})

//user===>multer==ram===>cloudinary/
//user====>multer===disk===>cloudinary
module.exports={uploadfileondisk,uploadfilecloud}
