
const createHttpError = require("http-errors");
const app = require("../../../server");


const getAllServices = async (req, res, next) => {
  try {
    await app.db
      .from("services")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "services not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "services fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.InternalServerError("Internal Server Error"));
  }
};

const getServiceById = async (req, res, next) => {
  try {
    await app.db
      .from("services")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "services not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "services fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  getAllServices,
  getServiceById,
 
};
  