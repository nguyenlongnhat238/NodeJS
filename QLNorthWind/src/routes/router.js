const express = require("express");
const productRouter = require("./product.routes.js")

const apiRoute = express();

apiRoute.use("/products", productRouter);

module.exports = apiRoute;


