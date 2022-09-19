const ProductService = require("../services/product.service.js");
const ProductController = {};

ProductController.getAllProduct = async (req, res) => {
    // try {
    // const products = await ProductService.getAllProduct();
    await res.status(200).json({
        status: "success",
        products: "products",
    });
    // } catch (error) {
    //     res.status(400).json({
    //         message: "error",
    //     });
    // }
}

module.exports = ProductController;