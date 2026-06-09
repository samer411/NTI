const authController = require('../controllers/Auth.controller')
const express = require("express")
const userValidate = require("../validators/user.validator")
const {registerValidate,loginValidate} = require("../validators/user.validator")

const validateMiddleware = require("../middlewares/joi.middleware")
const router = express.Router()
router.post('/register',validateMiddleware(registerValidate),authController.register)
router.post('/login',authController.login)
module.exports = router