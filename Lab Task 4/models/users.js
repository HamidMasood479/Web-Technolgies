const mongoose = require("mongoose");
const userssSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: "games" }],
});
const User = mongoose.model("User", userssSchema);
module.exports = User;
