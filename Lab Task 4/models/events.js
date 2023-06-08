const mongoose = require("mongoose");
const eventsSchema = mongoose.Schema({
  title: String,
  venue: String,
  duration: String,
  img: String,
  description: String,
});
const Event = mongoose.model("Event", eventsSchema);
module.exports = Event;
