const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const config = require("./src/configs/db.config")
const sql = require("mssql")
const app = express();

const port = process.env.PORT || 3333;
app.use(express.json());

// app.get("/api", require("./src/routes/router").default);
async function getProduct() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Products");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
};
app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
    });
});

app.get("/get-all-product", (req, res) => {
    res.status(404).json({
        message: getProduct(),
    })
})
app.get("*", (req, res) => {
    res.status(404).json({
        message: "404 Page not found",
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});