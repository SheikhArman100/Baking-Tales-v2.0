const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT.js');
const { getWishlist, addWishlist, deleteWishlist } = require('../controllers/wishlist.controller.js');
const router = express.Router();

//get all the wishlist items
router.get("/",verifyJWT,getWishlist)

//add new item to wishlist
router.post("/",verifyJWT,addWishlist)

//delete a item from the wishlist
router.delete("/",verifyJWT,deleteWishlist)

module.exports=router