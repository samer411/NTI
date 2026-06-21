const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name:process.env.cloudinary_name||"do4pluoyi",
    api_key:process.env.cloudinary_key||"729722752427748",
    api_secret:process.env.cloudinary_secret ||"E5uS_hC8NyFqtTX-q4rt9EXNbCs"
})



module.exports = cloudinary;