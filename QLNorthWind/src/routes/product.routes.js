const express = require("express");
const ProductController = require("../controllers/product.controller.js");
const productRouter = express.Router();

// productRouter.get("/get-all", (req, res) => ProductController.getAllProduct());
productRouter.get("/get-all", function (req, res) {
    res.send("All");
});

module.exports = productRouter;