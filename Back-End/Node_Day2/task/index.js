const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.json())

const data = fs.readFileSync("./DB.json",'utf-8')
const db = JSON.parse(data)
module.exports.db = db

let posts = db.posts
module.exports.posts = posts
let users = db.users
module.exports.users = users

const usePostsRoute = require('./routes/posts.route')
const useUsersRoute = require('./routes/users.route')

app.use('/posts',usePostsRoute)
app.use('/users',useUsersRoute)

app.listen(3000,"127.0.0.1",()=>{
    console.log("Server is Running on Port 3000")
})
