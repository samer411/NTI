const express= require('express')
const router = express.Router()
const usercontroller= require('../controllers/user.controller')
const verifytoken = require('../middlewares/veifytoken.middleware')

router.post('/',usercontroller.register)
router.get('/verify/:token',verifytoken("verify"),usercontroller.verifymail)
router.post('/reset',usercontroller.resetpassword)
router.post('/change/:token',verifytoken("reset"),usercontroller.changepassword)
module.exports=router
