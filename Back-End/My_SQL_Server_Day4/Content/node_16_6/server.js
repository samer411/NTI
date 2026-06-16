const express = require('express')
const userroute=require('./routes/user.route')

const app = express()
app.use(express.json())
app.use('/users',userroute)
app.listen(3000,()=>{
    console.log("SERVER RUN")
})
//tcp connection from sql server  configuration manager
//restart sql server service
// enble sql server authentication
//restart sql server service
//create login sa with password 123456
//restart sql server service
// create database NTI_DB
//*********************************************************
//npx sequelize-cli migration:generate --name add-gender-to-users
//npx sequelize-cli db:migrate
//npx sequelize-cli model:generate --name User --attributes name:string,email:string
//npm install express sequelize tedious mssql
//npm install sequelize-cli nodemon --save-dev
//npx sequelize-cli init
//npm install mysql2
