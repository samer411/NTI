const express = require("express")
const router = express.Router()
const controller = require('../controllers/user.controller')

router.get("/",controller.getAll)
router.post("/",controller.create)
router.get("/:id",controller.getById)
router.delete("/:id",controller.delete)
router.put("/:id",controller.update)


module.exports = router