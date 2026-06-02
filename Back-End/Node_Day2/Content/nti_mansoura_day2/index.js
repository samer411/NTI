const express = require ('express')
const app = express()
const fs = require('fs')
// const server = express()
// app.get('/',(req,res)=>{
//     res.status(200).json("hello")
// })
app.use(express.json()) //middeware
const data = fs.readFileSync('./DB.json','utf-8')
const db = JSON.parse(data)
let posts = db.posts
module.exports.posts=posts
let users = db.users
module.exports.users=users
const userroute =require('./routes/posts.route')

app.use('/posts',userroute)
app.use('/users',require('./routes/users.route'))
app.listen(3000,"127.0.0.1",()=>{
    console.log("we are listen on port 3000")
});

//model
//controllers
//routes
//use my server

