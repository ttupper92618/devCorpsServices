var mysql = require("mysql");
var request = require("request");

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "devcorps",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM courses", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

var courses = {};

module.exports = courses;
