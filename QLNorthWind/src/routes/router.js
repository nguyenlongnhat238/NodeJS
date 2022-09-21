const express = require("express");
const productRouter = require("./product.routes.js")
const cateRouter = require("./cate.routes")

const apiRoute = express();

apiRoute.use("/products", productRouter);
apiRoute.use("/cates", cateRouter)

module.exports = apiRoute;


