const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "devcorps",
  multipleStatements: true,
});

con.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("connection failed");
  }
});

var routes = require("./api/routes");
routes(app);
app.listen(port, function () {
  console.log("Server started on port: " + port);
});
