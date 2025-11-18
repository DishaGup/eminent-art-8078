const express = require("express");
const app = express();
const { connection } = require("./Connection/connection");

const { auth } = require("./MiddleWare/logintrendify.middleware");

const { productTrendifyRouter } = require("./Routes/producttrendify.route");
const cors = require("cors");
require("dotenv").config();

const { userTrendifyRouter } = require("./Routes/usertrendify.route");
const { cartTrendifyRouter } = require("./Routes/carttrendify.route");
const { wishlistRouter } = require("./Routes/wishlist.route");

app.use(cors());
app.use(express.json());

app.use("/trendify/products", productTrendifyRouter);

app.use("/trendify/users", userTrendifyRouter);
app.use("/trendify/cart", auth, cartTrendifyRouter);
app.use("/trendify/wishlist", auth, wishlistRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (err) {
    console.log("cannot connect to the db", err);
  }
  console.log("Port 8080 is running");
});
