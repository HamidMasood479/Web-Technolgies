const express = require("express");
const mongoose = require("mongoose");
const Game = require("./models/games.js");
const Event = require("./models/events.js");
const News = require("./models/news.js");
const User = require("./models/users.js");
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
const gamesRouter = require("./routes/api/games/gamesRouter.js");
app.use("/games", gamesRouter);
const eventsRouter = require("./routes/api/events/eventsRouter.js");
app.use("/events", eventsRouter);
const newsRouter = require("./routes/api/news/newsRouter.js");
app.use("/news", newsRouter);
const usersRouter = require("./routes/api/users/usersRouter.js");
app.use("/users", usersRouter);

app.get("/", async (req, res) => {
  let games = await Game.find();
  let events = await Event.find();
  let news = await News.find();
  res.render("homepage", { games, events, news });
});

// app.get("/games/cart", async (req, res) => {
//   let games = await Game.find();
//   res.render("cart", { games });
// });

app.get("/adminhome", (req, res) => {
  res.render("adminhome");
});
app.get("/cart", (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  let games = Game.find({ _id: { $in: cart } });
  res.render("cart", { games });
});
app.get("/cart/remove/:id", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  let index = cart.findIndex((c) => c == req.params.id);
  cart.splice(index, 1);
  res.cookie("cart", cart);
  return res.redirect("back");
});
app.get("/cart/:id", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  cart.push(req.params.id);
  res.cookie("cart", cart);
  res.render("cart");
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
