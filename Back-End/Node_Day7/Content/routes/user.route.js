const express = require('express')
const router = express.Router()

const userValidation = require("../validators/user.validator")
const validMiddleware = require("../middlewares/joi.middleware")

router.post("/",validMiddleware(userValidation))