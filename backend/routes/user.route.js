const express=require("express")
const verifyJWT = require("../middlewares/verifyJWT.js")
const { getUserDetails } = require("../controllers/user.controller.js")
const router=express.Router()

router.get("/",verifyJWT,getUserDetails)
module.exports=router