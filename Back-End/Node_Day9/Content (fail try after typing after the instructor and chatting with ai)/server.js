const { Server } = require("socket.io");
const mongoose = require("mongoose");
const http = require("http");
const express = require("express");
const path = require("path");
const User = require("./models/user.model");
const Message = require("./models/message.model");

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
  .then(() => {
    console.log("DB Done");
  })
  .catch((err) => {
    console.log(err);
  });

io.on("connection", (socket) => {
  console.log("Connected socket:", socket.id);

  socket.on("register", async (userName) => {
    await User.findOneAndUpdate(
      { userName },
      { userName, socketId: socket.id, isConnected: true },
      { upsert: true, new: true },
    );

    socket.name = userName;

    const queue = await Message.find({
      reciever: userName,
      isDelivered: false,
    });
    queue.forEach((m) => {
      socket.emit("privateMessage", m);
    });

    await Message.updateMany(
      { reciever: userName, isDelivered: false },
      { isDelivered: true },
    );
  });

  socket.on("privateMessage", async ({ receiverName, msgBody }) => {
    if (typeof receiverName === "object" && receiverName !== null) {
      msgBody = receiverName.msgBody;
      receiverName = receiverName.reciever || receiverName.receiver;
    }

    const sender = socket.name;
    const receiver = await User.findOne({ userName: receiverName });

    const message = await Message.create({
      sender,
      reciever: receiverName,
      msgBody,
      isDelivered: false,
    });

    if (receiver && receiver.isConnected === true) {
      io.to(receiver.socketId).emit("privateMessage", message);
      socket.emit("privateMessage", message);
      message.isDelivered = true;
      await message.save();
    }
  });

  socket.on("disconnect", async () => {
    await User.updateOne({ socketId: socket.id }, { isConnected: false });
    console.log("the user disconnected with name & id", socket.name, socket.id);
  });
});

app.get("/getmsg", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

httpServer.listen(3000, "127.0.0.1", () => {
  console.log("server is running...");
});
