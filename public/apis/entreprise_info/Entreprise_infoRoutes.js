
const express = require("express");
const Entreprise_infoController = require("./Entreprise_infoController");



const restRouterentreprise_info = express.Router();


restRouterentreprise_info.get("/",Entreprise_infoController.getAllEntreprise_infos);
restRouterentreprise_info.get("/:id",  Entreprise_infoController.getEntreprise_infoById);

module.exports = { restRouterentreprise_info };