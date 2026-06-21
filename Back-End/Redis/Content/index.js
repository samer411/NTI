const express= require("express")
const session = require("express-session")
const mongoose = require("mongoose")
const redis = require("redis")
const {RedisStore} = require("connect-redis")
const User = require("./models/user.model")
mongoose.connect("mongodb://127.0.0.1:27017/demo")
.then(()=>console.log("Mongo Done"))
.catch(err=>console.log(err))
const connectionRedis = redis.createClient({url:"redis://localhost:6379"})
connectionRedis.connect()
    .then(()=>{console.log("Redis Done")})
    .catch((err)=>console.log(err))
const server = express()
server.use(express.json())
server.use(
    session({
        store:new RedisStore({client:connectionRedis}),
        secret:"xxxxx",
        resave:false,
        prefex:"sess",
        saveUninitialized:false,
        cookie:{
            httpOnly:true,
            maxAge:1000*60*60
        }
    })
)


server.post("/register",async(req,res)=>{
    const {username,password}= req.body
    const user = User({ username,password })
    await user.save()
    res.status(201).json({message:"User Register Done."})
})

server.post("/login",async(req,res)=>{
    const {username,password}=req.body
    const user = await User.findOne({username})
    req.session.user = {
        username:user.username,
        id:user._id,
        password:user.password
    }
    res.status(200).json({message:"User Login Done."})
})


server.get("/get",async(req,res)=>{
    if(!req.session.user){
        return res.status(401).json("Not Login")
    }
    res.json({message:"User Session",
        user:req.session.user
    })
})

server.post("/logout",async(req,res)=>{
   await req.session.destroy()
    res.json({msg:"Logged Out"})
})

server.get("/users",async (req,res)=>{
    try{
        const usersCheck = await connectionRedis.get("users")
        if(usersCheck){
           return res.json(JSON.parse(usersCheck))
        }
        const users= await User.find()
        await connectionRedis.set("users",JSON.stringify(users))
        res.json({users})
    }
    catch(err){
        console.log(err)
    }
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running")
})


//CuVCH1-TmP_lT-2_L4QMxxW4ZAZ-wwES
