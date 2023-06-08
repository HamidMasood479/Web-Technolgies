const express = require("express");
const router = express.Router();
const Game = require("../../../models/games.js");

router.get("/gamesedit/:id", async (req, res) => {
  let games = await Game.findById(req.params.id);
  res.render("gamesedit", { games });
});

router.get("/addgamesform", (req, res) => {
  res.render("addgamesform");
});
router.get("/gameslist", async (req, res) => {
  let games = await Game.find();
  res.render("gameslist", { games });
});
router.get("/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  res.render("gameindividual", { game });
});
router.get("/delete/:id", async (req, res) => {
  let game = await Game.findByIdAndDelete(req.params.id);
  // res.send(game);
  res.redirect("/");
});
router.delete("/delete/:id", async (req, res) => {
  let game = await Game.findByIdAndDelete(req.params.id);
  // res.send(game);
  res.redirect("/");
});
router.get("/", async (req, res) => {
  let games = await Game.find();
  res.render("games", { games });
});

router.post("/gameedit/:id", async (req, res) => {
  let game = await Game.findByIdAndUpdate(req.params.id, req.body);
  // game.title = req.body.title;
  // game.publisher = req.body.publisher;
  // game.category = req.body.category;
  // game.year = req.body.year;
  // game.mostplayed = req.body.mostplayed;
  // game.price = req.body.price;
  // game.img = req.body.img;
  // game.description = req.body.description;

  await game.save();
  res.redirect("/");
});
router.post("/addgamesform", async (req, res) => {
  let newGame = new Game(req.body);
  await newGame.save();
  //res.send(newGame);
  res.redirect("/");
});
module.exports = router;
