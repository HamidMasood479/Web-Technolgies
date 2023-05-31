const express = require("express");
const router = express.Router();
const Event = require("../../../models/events.js");
router.get("/", async (req, res) => {
  let event = await Event.find();
  res.json(event);
});
router.get("/events", async (req, res) => {
  let event = await Event.find();
  res.json(event);
});

router.get("/:id", async (req, res) => {
  let event = await Event.findById(req.params.id);
  res.json(event);
});

module.exports = router;
