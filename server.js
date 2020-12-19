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
    res.send("failed db_connect: " + err);
    throw err;
  }
  console.log("MySQL connected");
});

const app = express();
const port = 3000;

app.get("/about", (req, res) => {
  res.send("devcorps microservices 1.0.0");
});

app.get("/courses", (req, res) => {
  let sql = "SELECT * from courses";
  let query = db.query(sql, (err, results) => {
    if (err) {
      res.send("failed /courses db select: " + err);
      throw err;
    }
    res.send(results);
  });
});

app.get("/course_sections", (req, res) => {
  const courseId = req.query.courseid;
  let sql = "SELECT * from course_sections WHERE courseId = ?";
  let query = db.query(sql, courseId, (err, results) => {
    if (err) {
      res.send("failed /course_sections db select: " + err);
      res.send("failed for courseId: " + courseId);
      throw err;
    }
    res.send(results);
  });
});

//const routes = require("./api/routes");
//routes(app);
app.listen(3000, function () {
  console.log("Server started on port: " + port);
});
