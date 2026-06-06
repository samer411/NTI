const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user.controller')
const{printname}=require('../middlewares/hellouser.middleware')
// router.use(printnamde)
// router.use(printname)
router.get('/getall',printname,usercontroller.getallusers)
router.get('/getbyid/:id',usercontroller.getuserbyid)
router.post('/',usercontroller.createuser)
router.put('/:id',usercontroller.updateuser)
router.get('/filter',usercontroller.filteruser)


module.exports= router