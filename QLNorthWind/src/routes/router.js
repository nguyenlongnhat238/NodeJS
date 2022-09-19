const express = require("express");
const productRouter = require("./product.routes.js")

const apiRoute = express();

apiRoute.use("/product", require("./product.routes"));

module.exports = apiRoute;


