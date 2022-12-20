const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const models = require('../api/models');
  
// models.sequelize.sync({force:false})

app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));

app.use(bodyparser.json({ limit: "50mb" }));
app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "/../build/assets")));
app.use("/img", express.static(path.join(__dirname, "/../build/img")));
app.use("/js", express.static(path.join(__dirname, "/../build/js")));
app.use("/static", express.static(path.join(__dirname, "/../build/static")));

const LogIn = require("../api/routes/LogIn");
const UpdatePassword = require("../api/routes/UpdatePassword");
const Testing = require("../api/routes/Testing");
const Create = require("../api/routes/Create");
const Get = require("../api/routes/Get");
const GetAll = require("../api/routes/GetAll");
const Delete = require("../api/routes/Delete");
const LookUp = require("../api/routes/LookUp");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "build");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, PATCH, OPTIONS HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/Testing", Testing);
app.use("/api/v1/LogIn", LogIn);
app.use("/api/v1/UpdatePassword", UpdatePassword);
app.use("/api/v1/Create", Create);
app.use("/api/v1/Get", Get);
app.use("/api/v1/GetAll", GetAll);
app.use("/api/v1/Delete", Delete);
app.use("/api/v1/LookUp", LookUp);


app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../build/index.html"));
});

module.exports = app;
