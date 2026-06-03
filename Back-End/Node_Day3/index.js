const mongoose = require("mongoose");



// this is the common shape not the async and await because node is older than ecmascript
mongoose
  .connect("mongodb://127.0.0.1:27017/samerDB")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("ERROR", er);
  });


const user = require("./models/user.model")
// const newUser = new user({
//     name:"hamde",
//     email:"hamde@nti.com",
//     password:"123"
// })

// newUser.save()

async function findUsers(){

    // const users =  await user.find()
    // console.log(users)
    // const updatedUser = await user.findByIdAndUpdate('6a1fdfdb340c42fcdf3c0ee4',{
    //     name: 'mayada',
    // email: 'mayada@nti.com',
    // password: '123'
    // })
    // const exist = await user.findById("6a1fdfdb340c42fcdf3c0ee4")
    // console.log(exist)
    // const existUser = await user.findOne({password:"123"})
    // console.log(existUser)

    const notexist = await user.findByIdAndDelete('6a1fdfdb340c42fcdf3c0ee4')
    console.log(notexist)
}

findUsers()
