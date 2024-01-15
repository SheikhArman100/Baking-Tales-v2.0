const logger = require("../middlewares/logger.js");
const prisma = require("../prisma/client.js");

//get all the the orders
const getAllOrders = async (req, res) => {
  try {
    const userId = req.id;
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include:{
        orderItem:true
      }
    });
    return res.status(200).json({
      orders,
      status: "success",
      message: "Got all the orders",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
const getOrder = async (req, res) => {
  try {
    const userId = req.id;
    const { orderId } = req.params;

    const order = await prisma.order.findFirst({
      where: {
        userId: userId,
        orderItem: {
          some: {
            orderId: orderId,
          },
        },
      },
      include: {
        orderItem: true,
      },
    });
    return res.status(200).json({
      order,
      status: "success",
      message: "Got th order details",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//confirm an order
const confirmOrder = async (req, res) => {
  try {
    const userId = req.id;
    const { products, paymentMethod } = req.body;

    if (!products || !paymentMethod) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete order data",
      });
    }

    const totalAmount = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    const newOrder = await prisma.order.create({
      data: {
        userId: userId,
        totalAmount: totalAmount,
        paymentMethod: paymentMethod,
        status: "Processing",
      },
    });

    const orderProduct = products.map(async (product) => {
      await prisma.orderItem.create({
        data: {
          orderId: newOrder.id,
          productId: product.productId,
          quantity: product.quantity,
          price: product.price,
        },
      });
    });
    return res.status(200).json({
      status: "success",
      message: "Order is placed successfully",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//cancel order
const cancelOrder = async (req, res) => {
  try {
    const userId = req.id;
    const { orderId } = req.params;

    await prisma.order.updateMany({
      where: {
        userId: userId,
        orderItem: {
          some: {
            orderId: orderId,
          },
        },
      },
      data: {
        status: "Cancelled",
      },
    });
    return res.status(200).json({
      status: "success",
      message: "Successfully order canceled",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
module.exports = { getAllOrders, getOrder, confirmOrder, cancelOrder };
