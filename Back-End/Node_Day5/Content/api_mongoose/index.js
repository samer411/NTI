const express = require('express')
const server = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const postroute = require('./routes/post.route')
const userroute = require('./routes/user.route')
const authroute = require('./routes/auth.route')
mongoose.connect(process.env.local_mongo)
.then(()=>{console.log("DB Done")})
.catch(err=>{console.log(err)})
server.use(express.json())
server.use((req,res,next)=>{
    console.log(`${req.url}${req.path},${req.method}`)
    next()
})
server.use('/posts',postroute)
server.use('/users',userroute)
server.use('/auth',authroute)

// const applevel= 
// server.use(applevel)
const port = process.env.port||3000

server.listen(port,()=>{
    console.log('server Listen')
})
 
