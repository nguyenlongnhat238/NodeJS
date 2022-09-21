const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const config = require("./src/configs/db.config")
const bodyParser = require('body-parser');
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

const app = express();
const sql = require("mssql")

const port = process.env.PORT || 3333;
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing ap
const db = require("./src/configs/mondb.config")
db.connect();

async function getProduct() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Products");
        return products;
    }
    catch (error) {
        console.log(error);
    }
};
app.get("/", (req, res) => {
    res.send({
        getAllProduct: `http:/127.0.0.1:${port}/get-all-product`,
    });
});

app.get("/get-all-product", async (req, res) => {
    let products = await getProduct().then(result => result.recordsets)
    res.status(404).json({
        message: "success",
        products: products,
    })
})


app.post('/profile', upload.array(), (req, res, next) => {
    console.log(req.body)
    res.json(req.body)
})
app.use("/api", require("./src/routes/router"));
app.get("*", (req, res) => {
    res.status(404).json({
        message: "404 Page not found",
    })
})






app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});