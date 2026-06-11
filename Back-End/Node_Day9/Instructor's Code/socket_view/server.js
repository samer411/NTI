const express = require('express')
const http = require('http')
const mongoose= require('mongoose')
const{Server}=require('socket.io')
const app = express();
const httpserver = http.createServer(app)
//cors ==> 
const io = new Server(httpserver,{
    cors:{
        origin:"*"
    }
})
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/socket').then(()=>{
    console.log('DB Done')
}).catch(err=>{
    console.log(err)
})
const User = require('./models/user.model')
const Msg = require('./models/mesagge.model')
io.on('connection',(socket)=>{
    console.log("a user connected with id",socket.id)
  
    socket.on('register',async(username)=>{
        await User.findOneAndUpdate(
            {username},{username,socketid:socket.id,isconnceted:true},
            {upsert:true}
        )
         socket.name=username
         const queue= await Msg.find({receive:username,isbeensend:false})
         queue.forEach(m => {
            socket.emit("prvitemsg",m)
         });
         await Msg.updateMany({receive:username},{isbeensend:true})
    })
    //prv msg
    socket.on("prvitemsg",async({receive,msg_body})=>{
        const sender = socket.name
        const receiver = await User.findOne({username:receive})
        const message = await Msg.create({
           sender:sender,
           receive:receive,
           msg_body:msg_body,
           isbeensend:false
        })
        if(receiver && receiver.isconnceted){
            io.to(receiver.socketid).emit("prvitemsg",message)
            message.isbeensend=true
            await message.save()
        }
       
    })
    // disconnect
  socket.on("disconnect", async () => {
    await User.updateOne(
      { socketId: socket.id },
      { isconnceted: false }
    );
    console.log("disconnected:", socket.id);
  });
})
     app.get('/getmsg',(req,res)=>{
            res.sendFile(__dirname +"/index.html")
        })
   httpserver.listen(3000,()=>{
    console.log("server run")
   })