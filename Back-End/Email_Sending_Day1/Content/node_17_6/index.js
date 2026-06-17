const dotenv= require('dotenv')
const config =dotenv.config({path:"./config/.env"})
const express= require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.use('/auth',require("./routes/user.route"))
mongoose.connect(process.env.mongo_url)
.then(()=>console.log("BD DONE"))
.catch((err)=>{console.log(err)})

app.listen(process.env.port,"127.0.0.1",()=>{
    console.log("server  DONe")
})


