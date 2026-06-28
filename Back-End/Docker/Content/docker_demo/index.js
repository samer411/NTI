const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
const app = express();
// 1. Define a simple schema + model
const MsgSchema = new mongoose.Schema({
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MsgModel = mongoose.model("Test", MsgSchema);

// 2. Connect MongoDB
mongoose.connect("mongodb://localhost:27018/testdb");
// mongoose.connect("mongodb://mongo:27017/testdb")

// 3. Run insert when connection is ready
mongoose.connection.once("open", async () => {
  console.log("Mongo connected");

  try {
    const doc = await MsgModel.create({
      message: "Hello from Mongo test insert ",
    });

    console.log("Inserted document:", doc);
  } catch (err) {
    console.error("Insert error:", err);
  }
});

const redisClient = redis.createClient({
    url:"redis://localhost:6379"
});

redisClient.connect()
.then(()=>console.log("Redis connected"));

// const redisClient = redis.createClient({
//     url: "redis://redis:6379"
// });

app.get("/", async (req,res)=>{
    await redisClient.set("message","hello docker");
    const value = await redisClient.get("message");

    res.send(value);
});

app.listen(3000, ()=>{
    console.log("Server running");
});