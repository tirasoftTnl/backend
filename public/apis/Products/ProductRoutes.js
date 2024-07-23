const express = require("express");
const ProductController = require("./ProductController");

const restRouterproducts = express.Router();

restRouterproducts.get("/", ProductController.getAllProducts);
restRouterproducts.get("/:id", ProductController.getProductById);
restRouterproducts.get("/category/:category", ProductController.getProductsByCategory);

module.exports = { restRouterproducts };
