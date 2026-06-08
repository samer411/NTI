const authController = require('../controllers/Auth.controller')
const express = require("express")
const userValidate = require("../validators/user.validator")

const validateMiddleware = require("../middlewares/joi.middleware")
const router = express.Router()
router.post('/register',validateMiddleware(userValidate),authController.register)
router.post('/login',authController.login)
module.exports = router