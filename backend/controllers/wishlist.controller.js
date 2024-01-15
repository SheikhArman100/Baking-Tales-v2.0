const logger = require("../middlewares/logger.js");
const prisma = require("../prisma/client.js");

//get all the wishlist items
const getWishlist = async (req, res) => {
  try {
    const userId = req.id;

    const wishlist = await prisma.wishlist.findMany({
      where: {
        userId: userId,
      },
    });
    return res.status(200).json({
      wishlist,
      status: "success",
      message: "Got all the wishlist",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//add new item to wishlist
const addWishlist = async (req, res) => {
  try {
    const userId = req.id;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete product data",
      });
    }
    const newWishlist = await prisma.wishlist.create({
      data: {
        userId: userId,
        productId: productId,
      },
    });
    return res.status(200).json({
      status: "success",
      message: "New item added to the wishlist",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//delete a item from the wishlist
const deleteWishlist = async (req, res) => {
  try {
    const userId = req.id;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete product data",
      });
    }
    await prisma.wishlist.deleteMany({
      where: {
        AND: [{ userId: userId }, { productId: productId }],
      },
    });
    return res.status(200).json({
      status: "success",
      message: "Successfully Remove from Wishlist",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
module.exports = {
  getWishlist,
  addWishlist,
  deleteWishlist,
};
