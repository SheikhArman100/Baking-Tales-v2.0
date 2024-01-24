const logger = require("../middlewares/logger.js");
const prisma = require("../prisma/client.js");

//get all the carts
const getCarts = async (req, res) => {
  try {
    const userId = req.id;
    const carts = await prisma.cart.findMany({
      where: {
        userId: userId,
      },
      include:{
        product:true
      }
    });
    return res.status(200).json({
      carts,
      status: "success",
      message: "Got all the cart",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//add a new item to cart
const addNewCart = async (req, res) => {
  try {
    const userId = req.id;
    const { productId, quantity,flavor,size } = req.body;

    if (!productId || !quantity ||!flavor ||!size) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete product data",
      });
    }
    const findProduct = await prisma.cart.findFirst({
      where: {
        AND: [{ userId: userId }, { productId: productId }],
      },
    });
    if (findProduct) {
      return res.status(409).json({
        status: "failed",
        message: "Product is already in the cart",
      });
    }
    await prisma.cart.create({
      data: {
        userId: userId,
        productId: productId,
        quantity: quantity,
        flavor:flavor,
        size:size
      },
    });
    return res.status(200).json({
      status: "success",
      message: "New item added to the cart",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//update quantity of item in cart
const updateCart = async (req, res) => {
  try {
    const userId = req.id;
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete product data",
      });
    }
    await prisma.cart.updateMany({
        where:{
            AND:[{userId:userId},{productId:productId}]
        },
        data:{
            quantity:quantity
        }
    })
    return res.status(200).json({
      status: "success",
      message: "Successfully updated quantity",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//remove an item from cart
const deleteCart = async (req, res) => {
  try {
    const userId = req.id;
    const { cartId } = req.body;

    if (!cartId) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete product data",
      });
    }
    await prisma.cart.deleteMany({
      where: {
        AND: [{ userId: userId }, { id: cartId }],
      },
    });
    return res.status(200).json({
      status: "success",
      message: "Successfully Remove from Cart",
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
  getCarts,
  addNewCart,
  updateCart,
  deleteCart,
};
