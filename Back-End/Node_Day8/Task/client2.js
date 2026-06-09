const {io} = require("socket.io-client")
const socket = io("http://127.0.0.1:3000");


socket.on('connect',()=>{
    console.log(`clinet two connected done with ${socket.id}`)
})
socket.on('servermsg',(msg)=>{
    console.log(msg)
})
socket.on('resjoinroom',(res)=>{
    console.log(res)
})
socket.emit('joinroom',"Group")
socket.on('room_msg',(msg)=>{
    console.log(msg)
})
socket.on('recievePrivateMessage',(data)=>{
    console.log(data.message)
})