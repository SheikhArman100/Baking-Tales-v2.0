//all import
const express=require("express")
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger=require("./middlewares/logger")


//import  routers
const authRouter=require("./routes/auth.route")
const userRouter=require("./routes/user.route.js")
const productRouter=require("./routes/product.route.js")
const wishlistRouter=require("./routes/wishlist.route.js")
const cartRouter=require("./routes/cart.route.js")
const orderRouter=require("./routes/order.route.js")




//code 
const app = express();

//middleware for cookies
app.use(cookieParser());
// built-in middleware for json 
app.use(express.json({ limit: '20mb' }));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ limit: '20mb',extended: false })); //why false?

// Cross Origin Resource Sharing
app.use(
  cors({
    credentials: true,
    origin: ["https://baking-tales-v2.vercel.app",
  "http://localhost:3000"],//!write frontend route here
  })
);





//routes
app.use("/api/v1.0.0/auth", authRouter);
app.use("/api/v1.0.0/user",userRouter)
app.use("/api/v1.0.0/product", productRouter);
app.use("/api/v1.0.0/wishlist", wishlistRouter);
app.use("/api/v1.0.0/cart", cartRouter);
app.use("/api/v1.0.0/order", orderRouter);




//start the express server
const PORT = process.env.PORT || 3501;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));


