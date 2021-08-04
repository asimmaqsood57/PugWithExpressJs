const express = require("express");

const path = require("path");

const app = express();

app.set("view engine", "pug");
// for serving static  files
app.use("/static", express.static("static"));

//set the views directory

app.set("views", path.join(__dirname, "views"));

//our pug demo endpoint

const port = 80;

app.get("/demo", (req, res) => {
  res.status(200).render("demo", { title: "Hey", message: "Hello there!" });
});
app.get("/", (req, res) => {
  res.send("This is my first Home page express app");
});
app.get("/about", (req, res) => {
  res.send("This is my Second about page express app");
});

app.listen(port, () => {
  console.log(`Server has started at port ${port}`);
});
