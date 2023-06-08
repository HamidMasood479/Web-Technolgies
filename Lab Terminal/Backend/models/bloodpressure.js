const mongoose = require("mongoose");
const bloodPressureSchema = new mongoose.Schema({
  Diastolic: { type: String, required: true },
  Systolic: { type: String, required: true },
  time: { type: String, required: true },
});

const bloodPressure = new mongoose.model("bloodPressure", bloodPressureSchema);
module.exports = bloodPressure;
