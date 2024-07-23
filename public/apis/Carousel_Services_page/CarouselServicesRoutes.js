
const express = require("express");
const ServiceController = require("./CarouselServicesController");


const restRouterCarouselServices = express.Router();

restRouterCarouselServices.get("/", ServiceController.getAllCarouselServices);
restRouterCarouselServices.get("/:id", ServiceController.getCarouselServicesById);

module.exports = { restRouterCarouselServices };