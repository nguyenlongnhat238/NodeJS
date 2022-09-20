

const ProductService = {};
const sql = require("mssql");

const config = require("../configs/db.config");

ProductService.getAllProduct = async () => {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Products");
        return products;
    }
    catch (error) {
        console.log(error);
    }
};

ProductService.getProductByID = async (req, res) => {
    try {
        let productID = await parseInt(req.params.productID) || NaN
        console.log(`Mã sản phẩm: ${productID}`)
        if (productID != NaN) {
            let pool = await sql.connect(config);
            let product = await (await pool.request().query(`select * from Products where ProductID = ${productID}`)).recordset;
            if (product == '') {
                throw "không có sản phẩm!!!"
            }
            else {
                return product;
            }
        }
        else {
            throw "Lỗi params"
        }
    }
    catch (error) {
        console.log(error);
        return error
    }
}

ProductService.createProduct = async (req, res) => {
    try {
        console.log(req.body)
        let name = await String(req.body.name) || ''
        let supID = await parseInt(req.body.supID) || NaN
        let cateID = await parseInt(req.body.cateID) || NaN
        let quantity = await parseInt(req.body.quantity) || NaN
        console.log(name, supID, cateID, quantity)
        if (name == '' || supID != supID || cateID != cateID || quantity != quantity) {
            throw "nhập thông tin sản phẩm";
        }
        else {
            let pool = await sql.connect(config);
            let product = await pool.request().query(`insert into Products(ProductName,SupplierID,CategoryID,QuantityPerUnit,Discontinued) values('${name}', ${supID}, ${cateID}, ${quantity}, 0) `)
            return product;
        }
    }
    catch (error) {
        console.log(error);
        return error
    }
}

ProductService.deleleProductByID = async (req, res) => {
    try {
        let productID = await parseInt(req.params.productID) || NaN
        if (productID != productID) {
            throw "lỗi params"
        }
        else {
            let pool = await sql.connect(config);
            let product = await (await pool.request().query(`select * from Products where ProductID=${productID}`)).recordset
            if (product == '') {
                throw "không có sản phẩm cần xóa"
            }
            else {
                let result = await pool.request().query(`delete from Products where ProductID=${productID}`)
                return result
            }
        }
    } catch (error) {
        console.log(error)
    }
}

ProductService.updateProductByID = async (req, res) => {
    try {
        let productID = await parseInt(req.params.productID) || NaN
        let name = await String(req.body.name) || ''
        if (productID != productID || name == '') {
            throw "lỗi params"
        }
        else {
            let pool = await sql.connect(config);
            let product = await (await pool.request().query(`select * from Products where ProductID=${productID}`)).recordset
            if (product == '') {
                throw "không có sản phẩm cần sửa"
            }
            else {
                let result = await pool.request().query(`update Products set ProductName = '${name}' where ProductID=${productID}`)
                return result, product
            }
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = ProductService;