const db = require("../models/index");
const ResponseLog = require("../../core/ResponseLog");

exports.get = async (req, res) => {
  try {
    await db.sequelize.authenticate()

    let object = {
      Status: "OK",
      Version: "1.1.0",
      NodeServer: "Node Server is up and running!",
      DBServer: "Database is up and running!",
    };
    ResponseLog.Send200(req, res, object)
  } catch (err) {
    ResponseLog.Error200(req, res, `Unable to connect to the database: ${err}`);
  }
};

