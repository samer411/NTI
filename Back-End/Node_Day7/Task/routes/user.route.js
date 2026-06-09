const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

const {printRouterName} = require("../middlewares/router.middleware")
const{createUser} = require("../middlewares/createUser.middleware")

const {registerValidate,loginValidate} = require("../validators/user.validator")
const validateMiddleware = require("../middlewares/joi.middleware")

// filteration route must be the first one before everything because he will not distinguish between parameters(id) and query string
// router.use(printRouterName)
router.get("/filter",userController.filterUsers)
router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUserById)
router.post("/",validateMiddleware(registerValidate),userController.CreateUser)
router.put("/:id",userController.UpdateUser)
router.patch("/:id",userController.PartialUpdateUser)
router.delete("/:id",userController.deleteUser)


module.exports = router