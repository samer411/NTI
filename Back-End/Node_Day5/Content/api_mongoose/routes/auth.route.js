const authcontroller = require('../controllers/Auth.controller')
const express = require('express')
const router = express.Router()
router.post('/register',authcontroller.register)
router.post('/login',authcontroller.login)
module.exports= router
