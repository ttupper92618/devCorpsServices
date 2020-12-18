const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "devcorps",
  password: "",
  database: "admin_devCorps",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

const app = express();
const port = process.env.PORT || 3000;

const routes = require("./api/routes");
routes(app);
app.listen(port, function () {
  console.log("Server started on port: " + port);
});
