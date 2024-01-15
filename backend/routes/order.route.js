const express=require("express")
const verifyJWT = require("../middlewares/verifyJWT.js")
const { getAllOrders, confirmOrder, cancelOrder, getOrder } = require("../controllers/order.controller.js")
const router=express.Router()


//get all the the orders
router.get("/",verifyJWT,getAllOrders)
//get an order details
router.get("/:orderId",verifyJWT,getOrder)

//confirm an order
router.post("/",verifyJWT,confirmOrder)
//cancel order
router.patch("/:orderId",verifyJWT,cancelOrder)

module.exports=router