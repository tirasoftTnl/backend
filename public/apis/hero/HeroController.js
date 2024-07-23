
const createHttpError = require("http-errors");
const app = require("../../../server");

 
const getAllImages = async (req, res, next) => {
  try {
    await app.db
      .from("home_images")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "images not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "images fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.InternalServerError("Internal Server Error"));
  }
};

const getImagesById = async (req, res, next) => {
  try {
    await app.db
      .from("home_images")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "images not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "images fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  getAllImages,
  getImagesById,
};
  