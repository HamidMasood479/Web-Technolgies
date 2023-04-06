const express = require("express");
let server = express();
server.listen(4000);

server.use(express.static("public"));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("Home");
});
server.get("/Events", (req, res) => {
  res.render("Events");
});
