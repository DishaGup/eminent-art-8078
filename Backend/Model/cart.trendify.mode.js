const mongoose = require("mongoose");

const cartTrendifySchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
});

const CartTrendifyModel = mongoose.model("trendify_cart", cartTrendifySchema);

module.exports = { CartTrendifyModel };