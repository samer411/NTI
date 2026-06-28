const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student.route")
const courseRoutes = require("./routes/course.route")
const session = require("express-session")
const redis = require("redis")
const {RedisStore} = require("connect-redis")

mongoose.connect("mongodb://127.0.0.1/School")
    .then(()=>{console.log("Monoose DB Connected Successfully")})
const connectionRedis = redis.createClient({url:"redis://localhost:6379"})
connectionRedis.connect()
.then(()=>{console.log("Redis Done")})
.catch((err)=>{console.log(err)})
const app = express()

app.use(express.json())
app.use(
    session({
        store: new RedisStore({client:connectionRedis,ttl:60000}),
        secret:"sssss",
        resave:false,
        saveUninitialized:false,
        cookie:{
            httpOnly:true,
            maxAge:60000*60*60
        }
    })
)




app.use("/students",studentRoutes)
app.use("/courses",courseRoutes)
app.listen(3000,"127.0.0.1",()=>{
    console.log("SERVER Is Running and Listening to Port 3000")
})