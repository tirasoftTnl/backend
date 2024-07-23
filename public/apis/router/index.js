const app = require("../../../server");
const express = require("express");
const { restRouterproducts } = require("../Products/ProductRoutes");
const { restRouterservices } = require("../Services/ServiceRoutes");
const { restRouterentreprise_info } = require("../entreprise_info/Entreprise_infoRoutes");
const { restRouterimages } = require("../hero/HeroRoutes");
const { restRouterCarouselproducts } = require("../Carousel_Products_page/CarouselProductRoutes")
const { restRouterCarouselServices } = require("../Carousel_Services_page/CarouselServicesRoutes")
const restRouter = app;
// Import routes use unique route names
restRouter.use("/api/public/carousel_service/list", restRouterCarouselServices);
restRouter.use("/api/public/products/list", restRouterproducts);
restRouter.use("/api/public/services/list", restRouterservices);
restRouter.use("/api/public/info/list", restRouterentreprise_info);
restRouter.use("/api/public/images/list", restRouterimages);
restRouter.use("/api/public/carousel_prod/list", restRouterCarouselproducts);
// Add more route imports and usage as needed
module.exports = restRouter;