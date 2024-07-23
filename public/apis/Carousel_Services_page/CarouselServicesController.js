
const createHttpError = require("http-errors");
const app = require("../../../server");

 
const getAllCarouselServices = async (req, res, next) => {
  try {
    await app.db
      .from("service_carousel_images")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "products not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "products fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.InternalServerError("Internal Server Error"));
  }
};

const getCarouselServicesById = async (req, res, next) => {
  try {
    await app.db
      .from("service_carousel_images")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "products not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "products fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  getAllCarouselServices,
  getCarouselServicesById,
};
  