const express = require("express");
const ProductController = require("../controllers/product.controller.js");
const multer = require('multer')
const upload = multer()
const router = express.Router();
router.use(express.json())

// productRouter.get("/get-all", (req, res) => ProductController.getAllProduct());
router.get("/", (req, res) => ProductController.getAllProduct(req, res));

router.get("/:productID", upload.array(), (req, res) => ProductController.getProductByID(req, res));

router.post('/create-product', upload.array(), (req, res) => ProductController.createProduct(req, res));

router.delete('/delete-product/:productID', upload.array(), (req, res) => ProductController.deleteProductByID(req, res));

router.patch('/:productID/update-product', upload.array(), (req, res) => ProductController.updateProductByID(req, res));

module.exports = router;