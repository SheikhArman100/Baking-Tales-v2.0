const express = require('express');
const { createProduct, getProducts } = require('../controllers/product.controller.js');
const router = express.Router();


//generate otp route
router.post("/create",createProduct)
//get all products
router.get("/all",getProducts)




module.exports=router