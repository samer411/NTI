const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name:process.env.cloudinary_name||"dkvceqilh",
    api_key: process.env.cloudinary_key||"162112547463292",
    api_secret:process.env.cloudinary_secret||"5BVUyLj5vwO2ZvKIIsUTjiW3F_0"
})

module.exports=cloudinary;
