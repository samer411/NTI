const express = require('express')
const server = express()
const mongoose = require('mongoose')
const postroute = require('./routes/post.route')
const userroute = require('./routes/user.route')
const dotenv = require('dotenv')
const authRoute = require("./routes/auth.route")
dotenv.config({path:"./config.env"})


mongoose.connect(process.env.local_mongo)
//mongodb+srv://samer:<db_password>@cluster0.fcztnxp.mongodb.net/mansoura
.then(()=>{console.log("DB Done")})
.catch(err=>{console.log(err)})
server.use(express.json())
server.use((req,res,next)=>{
    console.log(`${req.url}${req.path},${req.method}`)
    next()
})
server.use('/posts',postroute)
server.use('/users',userroute)
server.use('/auth',authRoute)

// const applevel= 
// server.use(applevel)

server.listen(3000,()=>{
    console.log('server Listen')
})
 
