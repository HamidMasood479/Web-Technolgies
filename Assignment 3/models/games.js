const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  title: String,
  publisher: String,
  category: String,
  price: Number,
  year: Number,
  img: String,
  mostplayed: Boolean,
  description: String,
});
const Game = mongoose.model("Game", gamesSchema);
module.exports = Game;
