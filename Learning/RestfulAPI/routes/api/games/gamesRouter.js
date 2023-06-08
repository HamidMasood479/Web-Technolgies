const express = require("express");
const router = express.Router();
const Game = require("../../../models/games.js");

router.get("/addgamesform", (req, res) => {
  res.render("addgamesform");
});
router.get("/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  res.render("gameindividual", { game });
});
router.get("/", async (req, res) => {
  let games = await Game.find();
  res.render("games", { games });
});

router.post("/addgamesform", async (req, res) => {
  let newGame = new Game(req.body);
  await newGame.save();
  //res.send(newGame);
  res.redirect("/");
});
module.exports = router;
