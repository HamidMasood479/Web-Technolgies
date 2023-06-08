const express = require("express");
const router = express.Router();
const Event = require("../../../models/events.js");

router.get("/addeventsform", (req, res) => {
  res.render("addeventsform");
});

router.get("/:id", async (req, res) => {
  let event = await Event.findById(req.params.id);
  res.render("eventindividual", { event });
});
router.get("/", async (req, res) => {
  let events = await Event.find();
  res.render("events", { events });
});
router.post("/addeventsform", async (req, res) => {
  let newEvent = new Event(req.body);
  await newEvent.save();
  res.redirect("homepage");
});

module.exports = router;
