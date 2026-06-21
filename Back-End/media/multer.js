const multer = require("multer")
const diskStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload")
    },
    filename:(req,file,cb)=>{
        const filename = Date.now()+file.originalname
        cb(null,filename)
    }
})

const uploadFileOnDisck = multer({storage:diskStorage})
module.exports = {uploadFileOnDisck}