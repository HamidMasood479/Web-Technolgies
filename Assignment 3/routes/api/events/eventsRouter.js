const express = require("express");
const router = express.Router();
const Event = require("../../../models/events.js");

router.get("/eventedit/:id", async (req, res) => {
  let events = await Event.findById(req.params.id);
  res.render("eventsedit", { events });
});

router.get("/addeventsform", (req, res) => {
  res.render("addeventsform");
});
router.get("/eventslist", async (req, res) => {
  let events = await Event.find();
  res.render("eventslist", { events });
});

router.get("/:id", async (req, res) => {
  let event = await Event.findById(req.params.id);
  res.render("eventindividual", { event });
});
router.get("/delete/:id", async (req, res) => {
  let event = await Event.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
router.delete("/delete/:id", async (req, res) => {
  let event = await Event.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.get("/", async (req, res) => {
  let events = await Event.find();
  res.render("events", { events });
});
router.post("/eventedit/:id", async (req, res) => {
  let event = await Event.findByIdAndUpdate(req.params.id, req.body);
  await event.save();
  res.redirect("/");
});
router.post("/addeventsform", async (req, res) => {
  let newEvent = new Event(req.body);
  await newEvent.save();
  res.redirect("homepage");
});

module.exports = router;
