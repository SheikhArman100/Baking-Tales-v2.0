const logger = require("../middlewares/logger.js");
const prisma = require("../prisma/client.js");
const cloudinary  = require("../utils/cloudinary.js");

const createProduct = async (req, res) => {
  const { title, description, category, price, flavors, sizes, images } =
    req.body;
  if (
    !title ||
    !description ||
    !category ||
    !price ||
    !flavors ||
    !sizes ||
    !images
  ) {
    return res.status(400).json({
      status: "failed",
      message: "Invalid or incomplete user data",
    });
  }
  try {
    // console.log(images)
    const uploadList=[]
    for(const image in images){
      const uploadRes=await cloudinary.uploader.upload(images[image],{
      upload_preset:"BakingTales"
    })
    uploadList.push(uploadRes.secure_url)
    }
    
    const newProduct = await prisma.product.create({
      data: {
        title,
        description,
        category,
        price,
        flavors,
        sizes,
        images:uploadList
      },
    });
    return res.status(200).json({
      status: "success",
      message: "New product is created successfully",
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      status: "failed",
      message: "product creation failed",
    });
  }
};

//get all products
const getProducts=async(req,res)=>{
  try {
    const products=await prisma.product.findMany()
    return res.status(200).json({
      products
    });
  } catch (error) {
     logger.error(error);
     return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
    });
  }

}
module.exports = {
  createProduct,getProducts
};
