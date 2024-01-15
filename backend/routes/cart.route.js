const express=require("express")
const verifyJWT = require("../middlewares/verifyJWT.js")
const { getCarts, addNewCart, updateCart, deleteCart } = require("../controllers/cart.controller.js")
const router=express.Router()

//get all the carts
router.get("/",verifyJWT,getCarts)
//add a new item to cart
router.post("/",verifyJWT,addNewCart)
//update quantity of item in cart
router.patch("/",verifyJWT,updateCart)
//remove an item from cart
router.delete("/",verifyJWT,deleteCart)

module.exports=router