const express = require("express");
const router = express.Router();
const Game = require("../../../models/games.js");
router.get("/", async (req, res) => {
  let game = await Game.find();
  res.json(game);
});

router.get("/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  res.json(game);
});

module.exports = router;
