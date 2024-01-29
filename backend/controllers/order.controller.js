const logger = require("../middlewares/logger.js");
const prisma = require("../prisma/client.js");
const uuid = require("uuid");
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.SSL_STORE_ID;
const store_passwd = process.env.SSL_STORE_PASSWORD;
const is_live = false;

//get all the the orders
const getAllOrders = async (req, res) => {
  try {
    const userId = req.id;
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        orderItem: {
          include: {
            product: true,
          },
        },
        payment:true
      },
      orderBy: {
        createdAt: 'desc', 
      },
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
    const { products, name, phoneNumber, details, paymentMethod } = req.body;

    if (!products || !paymentMethod || !name || !phoneNumber || !details) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid or incomplete order data",
      });
    }

    const totalAmount = await products.reduce((acc, product) => {
      return acc + product.product.price * product.quantity;
    }, 0);

    const newOrder = await prisma.order.create({
      data: {
        userId: userId,
        totalAmount: totalAmount,
        paymentMethod: paymentMethod,
        paymentStatus: false,
      },
    });

   products.map(async (product) => {
      await prisma.orderItem.create({
        data: {
          orderId: newOrder.id,
          productId: product.productId,
          quantity: product.quantity,
          price: product.product.price,
          flavor:product.flavor,
          size:product.size
        },
      });
    });
    await prisma.cart.deleteMany({
      where:{
        userId:userId
      }
    })
    const userInfo = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        phoneNumber: phoneNumber,
        details: details,
      },
    });
    if (paymentMethod === "Payment Gateway") {
      const transactionId = uuid.v4();
      const ORIGIN=process.env.ORIGIN

      const data = {
        total_amount: totalAmount,
        currency: "BDT",
        tran_id: transactionId, // use unique tran_id for each api call
        success_url: `${ORIGIN}/checkout/success?transId=${transactionId}`,
        fail_url: `${ORIGIN}/checkout/failure`,
        cancel_url: `${ORIGIN}/checkout`,
        ipn_url: `${ORIGIN}`,
        shipping_method: "Courier",
        product_name: "Baking Product",
        product_category: "Baking",
        product_profile: "general",
        cus_name: userInfo.name,
        cus_email: userInfo.email,
        cus_add1: userInfo.details.address,
        cus_add2: "Dhaka",
        cus_city: userInfo.details.city,
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: userInfo.phoneNumber,
        cus_fax: userInfo.phoneNumber,
        ship_name: userInfo.name,
        ship_add1: userInfo.details.address,
        ship_add2: userInfo.details.address,
        ship_city: userInfo.details.city,
        ship_state: userInfo.details.city,
        ship_postcode: 1000,
        ship_country: "Bangladesh",
      };
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      sslcz.init(data).then(async (apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        await prisma.payment.create({
          data: {
            orderId: newOrder.id,
            transactionId: transactionId,
            amount: totalAmount,
          },
        });
        return res.status(200).json({
          url: GatewayPageURL,
          status: "success",
          message: "Order is placed successfully",
        });
      });
    } else {
      return res.status(200).json({
        status: "success",
        message: "Order is placed successfully",
      });
    }
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
//payment success
const handlePaymentSuccess = async (req, res) => {
  try {
    const userId = req.id;
    const transId = req.query.transId;
    await prisma.order.updateMany({
      where: {
        AND: [{ userId: userId }, { payment: { transactionId: transId } }],
      },
      data: {
        paymentStatus: true,
      },
    });
    return res.status(200).json({
      status: "success",
      message: "Successfully payment completed",
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
module.exports = {
  getAllOrders,
  getOrder,
  confirmOrder,
  handlePaymentSuccess,
  cancelOrder,
};
