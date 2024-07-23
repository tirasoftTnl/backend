
const express = require("express");
const HeroController = require("./HeroController");


const restRouterimages = express.Router();

restRouterimages.get("/", HeroController.getAllImages);
restRouterimages.get("/:id", HeroController.getImagesById);

module.exports = { restRouterimages };