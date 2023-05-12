const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  title: String,
  publisher: String,
  category: String,
  price: Number,
  year: Number,
});
const Game = mongoose.model("Game", gamesSchema);
module.exports = Game;
