const express = require("express");
const server = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const {printReq} = require("./middlewares/app.middleware")

mongoose
  .connect("mongodb://127.0.0.1:27017/tawasol")
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
server.listen(3000,'127.0.0.1',()=>{
    console.log("server is listening")
})