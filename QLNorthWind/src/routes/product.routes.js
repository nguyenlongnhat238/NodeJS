const express = require("express");
const ProductController = require("../controllers/product.controller.js");

const router = express.Router();


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
// productRouter.get("/get-all", (req, res) => ProductController.getAllProduct());
router.get("/", (req, res) => res.json("assss"));

module.exports = router;