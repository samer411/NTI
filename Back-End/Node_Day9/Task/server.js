const User = require("./models/user.model");
const Message = require("./models/message.model");
const GroupMessage = require("./models/groupMessage.model");
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/socket")
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

io.on("connection", async (socket) => {
  console.log(`Client Connected with Socket Id : ${socket.id}`);
  socket.on("register", async ({userName,group}) => {
    console.log(userName);
    console.log(group);
    await User.findOneAndUpdate(
      { userName },
      { userName, socketId: socket.id, isConnected: true },
      { upsert: true },
    );
    socket.name = userName;
    const queue = await Message.find({
      messageReceiver: userName,
      isSent: false,
    })
    queue.forEach((m) => {
      socket.emit("privateMessage", m);
    });
    await Message.updateMany({ messageReceiver: userName }, { isSent: true });
  });
  socket.on("privateMessage", async ({ messageReceiver, messageBody }) => {
    const sender = socket.name;
    const receiver = await User.findOne({ userName: messageReceiver });
    message = await Message.create({
      sender: sender,
      messageReceiver: messageReceiver,
      messageBody: messageBody,
      isSent: false,
    });
    if (receiver && receiver.isConnected) {
      io.to(receiver.socketId).emit("privateMessage", message);
      message.isSent = true;
      await message.save();
    }
  });
  socket.on("joinRoom", (room) => {
    socket.join(room);
    socket.emit("resJoinRoom", {
      status: "ok",
      msg: `join in ${room} done`,
    });
  });
  socket.on("roomMessage", async ({ group, messageBody }) => {
    const sender = socket.name;
    groupMessage = await GroupMessage.create({
      sender:sender,
      group: group,
      messageBody: messageBody,
      isSent: false,
    });
    io.to(group).emit("roomMessage", groupMessage);
    groupMessage.isSent = true;
    await groupMessage.save();
  });
  socket.on("disconnect", async () => {
    await User.updateOne({ socketId: socket.id }, { isConnected: false });
    console.log(`${socket.id} is Disconnected`);
  });
});

app.get("/getmsg", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
httpServer.listen(3000, () => {
  console.log("server running...");
});
