const {Server} = require('socket.io')
const {createServer} = require('http')
const httpServer = createServer()
const io = new Server(httpServer)

io.on("connection",(socket)=>{
    console.log(`the client connect on socket ${socket.id}`)
    socket.emit('servermsg',"Welcome to our server")
    socket.on('sendmsg',(msg)=>{
        console.log(msg)
    })
    // socket.broadcast.emit('servermsg',`the client with id ${socket.id} is connected`)
    socket.on('joinroom',(room)=>{
        socket.join(room)
        socket.emit('resjoinroom',{
            status:'ok',
            msg:`join in ${room} done`
        })
    })
    socket.on('room_msg',(data)=>{
        console.log(data.msg)
        io.to(data).emit('room_msg',{
            from:socket.id,
            msg:data.msg
        })
    })
    socket.on('disconnect',()=>{
        console.log(`${socket.id} has disconnected`)
    })
    /* Sending Private Message */
    socket.on("sendPrivateMessage",(data)=>{
        const {toClient,content} = data;
        io.to(toClient).emit("recievePrivateMessage",{
            from:socket.id,
            message:content
        })
    })
    
})



httpServer.listen(3000,'127.0.0.1',()=>{
    console.log("server listen")
})
