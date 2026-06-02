const express = require("express")
const router = express.Router()

const {users}= require("../index")

const {getAllUsers,getUserById,createUser,deleteUser, updateUser,partialUpdateUser,filterUsers} = require("../controllers/User.controller")



router.get('/',getAllUsers)
router.get("/filter",filterUsers)
router.get('/:id',getUserById)
router.post("/",createUser)
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)
router.patch('/:id',partialUpdateUser)

module.exports=router