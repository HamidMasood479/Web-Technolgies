const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bloodPressure = require("./models/bloodpressure");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.get("/", async (req, res) => {
  let bloodPressureRecords = await bloodPressure.find();
  res.json(bloodPressureRecords);
});

app.post("/", async (req, res, next) => {
  let bp = new bloodPressure(req.body);
  await bp.save();
  res.status(201).send({
    message: "Record added succefully",
  });
});
app.listen(5000, () => {
  console.log("API server listening on port 5000");
});
let connectionString =
  "mongodb+srv://admin:admin@gamecluster1.jli3woh.mongodb.net/Games";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected: " + connectionString);
  })
  .catch(() => {
    console.log("unable to connect");
  });
