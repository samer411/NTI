const multer = require("multer")
const cloudinary = require("./cloudinary")
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const diskStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload")
    },
    filename:(req,file,cb)=>{
        const filename = Date.now()+file.originalname
        cb(null,filename)
    }
})

// const memoryStorage = multer.memoryStorage({})
const storageCloud = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"Nti/Images"
    }
})
const uploadFileCloud = multer({storage:storageCloud})
const uploadFileOnDisck = multer({storage:diskStorage})
module.exports = {uploadFileOnDisck,uploadFileCloud}