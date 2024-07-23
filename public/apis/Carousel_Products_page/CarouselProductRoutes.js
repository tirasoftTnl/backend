
const express = require("express");
const ProductController = require("./CarouselProductController");


const restRouterCarouselproducts = express.Router();

restRouterCarouselproducts.get("/", ProductController.getAllCarouselProducts);
restRouterCarouselproducts.get("/:id", ProductController.getCarouselProductById);

module.exports = { restRouterCarouselproducts };