const express = require('express');
const { generateOTP, verifyOtp, registerUser, handleSignin, handleSignout, updateAccessToken, checkUserStatus } = require('../controllers/auth.controller');
const router = express.Router();


//generate otp route
router.post("/generateOTP",generateOTP)

// verify token
router.post("/verifyOTP",verifyOtp)

//register new user after verification 
router.post("/register",registerUser)

//sign in
router.post("/signin",handleSignin)

//sign out
router.get("/signout",handleSignout)

//update Access token
router.get("/updateAT",updateAccessToken)

//user status
router.get("/status",checkUserStatus)



module.exports=router

