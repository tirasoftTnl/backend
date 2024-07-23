const createHttpError = require("http-errors");
const app = require("../../../server");

const getAllProducts = async (req, res, next) => {
  try {
    await app.db
      .from("products")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "products not found",
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

const getProductById = async (req, res, next) => {
  try {
    await app.db
      .from("products")
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

const getProductsByCategory = async (req, res, next) => {
  try {
    await app.db
      .from("products")
      .select("*")
      .where("category", "=", req.params.category)
      .orderBy("id", "asc")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "No products found in the given category",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "products fetched in the given category",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
};
