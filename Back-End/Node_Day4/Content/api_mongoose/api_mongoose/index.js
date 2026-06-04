const express = require('express')
const server = express()
const mongoose = require('mongoose')
const postroute = require('./routes/post.route')
const userroute = require('./routes/user.route')

mongoose.connect('mongodb://localhost:27017/mansoura')
.then(()=>{console.log("DB Done")})
.catch(err=>{console.log(err)})
server.use(express.json())
server.use((req,res,next)=>{
    console.log(`${req.url}${req.path},${req.method}`)
    next()
})
server.use('/posts',postroute)
server.use('/users',userroute)

// const applevel= 
// server.use(applevel)

server.listen(3000,()=>{
    console.log('server Listen')
})
 
