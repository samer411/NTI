const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")
const redis = require("redis")
const {RedisStore} = require("connect-redis")
const studentRouter = require("./routes/student.route")
const Student = require("./models/student.model")


mongoose.connect("mongodb://mongo:27017/newSchool").then(()=>{console.log("Mongo DB Is Connected Successfully")})
const connectionRedis = redis.createClient({url:"redis://redis:6379"})
async function setStudents(){
    try{
        await connectionRedis.connect()
        console.log("Redis Done")
        const students =  await Student.find()

        await connectionRedis.set("students",JSON.stringify(students))

    }
    catch(err){
        console.error(err)
    }
}

setStudents();
const app = express()

app.use(express.json())

app.use("/students",studentRouter)
app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is Running and Listenning to port 3000")
})