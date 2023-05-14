const express = require("express");
const wishlistRouter = express.Router();

const { WishlistModel } = require("../Model/wishlist.model");

wishlistRouter.post("/add", async (req, res) => {
  try {
    const product = new WishlistModel (req.body)
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

wishlistRouter.delete("/delete/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await WishlistModel .findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send("deletedProduct");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// ""delete all the product after purchase from the cart""
wishlistRouter.post("/delete/all", async (req, res) => {
  try {
    const { userId } = req.body;
    const deletedProducts = await WishlistModel .deleteMany({ userId });
    if (!deletedProducts.deletedCount) {
      return res.status(404).send("No products found for user");
    }
    res.status(200).send(`Deleted ${deletedProducts.deletedCount} products`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Get all products in cart
wishlistRouter.get("/", async (req, res) => {
  try {
    const userId = req.body.userId; 

    const products = await WishlistModel .find({
      userId,
    }); // Retrieve products that match user ID
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

wishlistRouter.patch("/increase", async (req, res) => {
  try {
    const { id, quantity } = req.body;

    if (!id || !quantity) {
      return res.status(400).send("Missing required fields");
    }

    const product = await WishlistModel .findOne({ _id: id });
    if (!product) {
      return res.status(404).send("Product not found");
    }

    product.quantity = quantity;
    await product.save();

    res.status(200).send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = { wishlistRouter };