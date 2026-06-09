const {io} = require("socket.io-client")
const socket = io("http://127.0.0.1:3000");


socket.on('connect',()=>{
    console.log(`client one connected done with ${socket.id}`)
})
socket.on('servermsg',(msg)=>{
    console.log(msg)
})
socket.on('resjoinroom',(res)=>{
    console.log(res)
    // socket.disconnect()
})
socket.emit("sendPrivateMessage",{
        toClient:'SakNm2i-h05UksQxAAAB',
        content:'Hi this is private message from client 1********************'
    })
socket.emit('sendmsg',"hello server, I am the client 1")
socket.emit('joinroom',"Group")
socket.emit('room_msg',{room:"Group",msg:"hello Group, I am client 1"})