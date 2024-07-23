
const express = require("express");
const ServiceController = require("./ServiceController");

const restRouterservices = express.Router();

restRouterservices.get("/",  ServiceController.getAllServices);
restRouterservices.get("/:id", ServiceController.getServiceById);

module.exports = { restRouterservices };
  