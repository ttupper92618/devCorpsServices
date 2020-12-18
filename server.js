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

app.get("/gettest", (req, res) => {
  let sql = "SELECT * from test";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("/courses", (req, res) => {
  let sql = "SELECT * from courses";
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

//const routes = require("./api/routes");
//routes(app);
app.listen(port, function () {
  console.log("Server started on port: " + port);
});
