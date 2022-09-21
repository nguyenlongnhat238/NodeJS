const ProductService = require("../services/product.service.js");
const ProductController = {};

ProductController.getAllProduct = async (req, res) => {
    try {
        const products = await ProductService.getAllProduct();
        res.status(200).json({
            message: "Tất cả sản phẩm",
            status: "success",
            products: products.recordsets,
        });
    } catch (error) {
        res.status(404).json({
            message: "error",
        });
    }
}

ProductController.getProductByID = async (req, res) => {
    try {
        const result = await ProductService.getProductByID(req, res);
        res.status(200).json({
            message: "Sản phảm",
            status: "success",
            result: result,
        });
    } catch (error) {
        res.status(404).json({
            message: "error",
        });
    }
}

ProductController.createProduct = async (req, res) => {
    try {
        const product = await ProductService.createProduct(req, res);
        console.log(product)
        res.status(200).json({
            message: "Thêm thành công",
            status: "success",
            products: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "error",
        });
    }
}
ProductController.deleteProductByID = async (req, res) => {
    try {
        const product = await ProductService.deleleProductByID(req, res);
        console.log(product)
        res.status(200).json({
            message: "Xóa thành công",
            status: "success",
            products: product,
        });
    } catch (error) {
        res.status(404).json({
            message: "error",
        });
    }
}
ProductController.updateProductByID = async (req, res) => {
    try {
        const result = await ProductService.updateProductByID(req, res);
        console.log(result)
        res.status(200).json({
            message: "Sửa thành công",
            status: "success",
            result: result,
        });
    } catch (error) {
        res.status(400).json({
            message: "error",
        });
    }
}
module.exports = ProductController;