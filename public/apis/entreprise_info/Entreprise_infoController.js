
const createHttpError = require("http-errors");
const app = require("../../../server");


const getAllEntreprise_infos = async (req, res, next) => {
  try {
    await app.db
      .from("entreprise_info")
      .select("*")
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "entreprise_info not found with the given id",
            status: 200,
            data: rows,
          });
        }
        res.json({
          message: "entreprise_info fetched",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.InternalServerError("Internal Server Error"));
  }
};

const getEntreprise_infoById = async (req, res, next) => {
  try {

    await app.db
      .from("entreprise_info")
      .select("*")
      .where("id", "=", req.params.id)
      .then((rows) => {
        if (rows.length === 0) {
          return res.json({
            message: "entreprise_info not found with the given id",
            status: 200,
            data: rows,
          });
        }

        res.json({
          message: "entreprise_info fetched with the given id",
          status: 200,
          data: rows,
        });
      });
  } catch (error) {
    next(new createHttpError.BadRequest("Bad Request"));
  }
};

module.exports = {
  
  getAllEntreprise_infos,
  getEntreprise_infoById,
};
  