const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log("Server running on port: " + port);
});
app.use("/api/games", require("./routes/api/games/gamesRouter.js"));
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
