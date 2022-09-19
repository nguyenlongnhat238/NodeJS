

const ProductService = {};
const sql = require("mssql");

const config = require("../configs/db.config");

ProductService.getAllProduct = async () => {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Products");
        return products.recordsets;
    } catch (error) {
        console.log(error);
    };
};

module.exports = ProductService;