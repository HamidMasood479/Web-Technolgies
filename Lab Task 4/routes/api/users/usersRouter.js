const express = require("express");
const router = express.Router();
const User = require("../../../models/users.js");
router.get("/", async (req, res) => {
  let users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  let user = await Game.findById(req.params.id);
  res.json(user);
});

module.exports = router;
