//all import
const express=require("express")
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger=require("./middlewares/logger")


//import  routers
const authRouter=require("./routes/auth.route")
const productRouter=require("./routes/product.route.js")




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
app.use("/api/v1.0.0/product", productRouter);




//start the express server
const PORT = process.env.PORT || 3501;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));


