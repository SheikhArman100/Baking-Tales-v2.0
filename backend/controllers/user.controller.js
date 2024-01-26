const logger = require("../middlewares/logger.js");
const prisma = require("../prisma/client.js");

//get all users
const getUserDetails = async(req, res) => {
  try {
    const userId=req.id
    const userInfo=await prisma.user.findFirst({
        where:{
            id:userId
        },
        select:{
            id:true,
            name:true,
            email:true,
            phoneNumber:true,
            details:true
        }
        
        
    })
   
    return res.status(200).json({
        userInfo:userInfo,
        status: "success",
        message: "Successfully got user info",
      });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
module.exports = { getUserDetails };
