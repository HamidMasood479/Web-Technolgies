const express = require("express");
const mongoose = require("mongoose");
const Game = require("./models/games.js");
const Event = require("./models/events.js");
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
app.use("/api/events", require("./routes/api/events/eventsRouter.js"));
app.get("/", async (req, res) => {
  let games = await Game.find();
  let events = await Event.find();
  res.render("homepage", { games, events });
});

app.get("/games", async (req, res) => {
  let games = await Game.find();
  res.render("games", { games });
});
app.get("/games/cart", async (req, res) => {
  let games = await Game.find();
  res.render("cart", { games });
});
app.get("/events", async (req, res) => {
  let events = await Event.find();
  res.render("events", { events });
});

let connectionString1 =
  "mongodb+srv://admin:admin@gamecluster1.jli3woh.mongodb.net/Games";
mongoose
  .connect(connectionString1)
  .then(() => {
    console.log("connected: " + connectionString1);
  })
  .catch(() => {
    console.log("unable to connect");
  });
