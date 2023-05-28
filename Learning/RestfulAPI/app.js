const express = require("express");
const mongoose = require("mongoose");
const Game = require("./models/games.js");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("express-ejs-layouts"));
app.use(cookieParser());
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log("Server running on port: " + port);
});
app.use("/api/games", require("./routes/api/games/gamesRouter.js"));
app.get("/", async (req, res) => {
  let games = await Game.find();
  res.render("homepage", { games });
});

app.get("/games", async (req, res) => {
  let games = await Game.find();
  res.render("games", { games });
});
app.get("/games/cart", async (req, res) => {
  let games = await Game.find();
  res.render("cart", { games });
});
let connectionString =
  "mongodb+srv://admin:admin@gamecluster1.jli3woh.mongodb.net/Games";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected: " + connectionString);
  })
  .catch(() => {
    console.log("unable to connect");
  });
