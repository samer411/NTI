const express = require("express");
const server = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const authRoute = require("./routes/auth.route")
const {printReq} = require("./middlewares/app.middleware")
const dotenv = require("dotenv");
const errorHandle = require("./middlewares/errorHandle.middleware");
const { validate } = require("./validators/user.validator");
dotenv.config({path:"./config.env"})

mongoose
  .connect("mongodb://127.0.0.1:27017/tawasol")
  // .connect(process.env.atles_mongo)
  .then(() => {
    console.log("DB Done");
  })
  .catch((err) => {
    console.log();
  });
server.use(express.json())
server.use(printReq)
server.use('/users',userRoute)
server.use('/posts',postRoute)
server.use('/auth',authRoute)

 server.use(errorHandle)
server.listen(3000,'127.0.0.1',()=>{
    console.log("server is listening")
})