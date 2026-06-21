const mongoose = require("mongoose");
const User = require("../models/user.model");
mongoose.connect("mongodb://127.0.0.1:27017/demo")
.then(()=>console.log("Mongo Done"),seedUsers())
.catch(err=>console.log(err))
async function seedUsers() {
  const users = [];
  for (let i = 1; i <= 2000; i++) {
    users.push({
      username: `user${i}`,
      password: `password${i}`,
    });
  }
  await User.insertMany(users);
  console.log("Seeding Done");
}
