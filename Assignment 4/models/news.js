const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  title: String,
  description: String,
  date: String,
  img: String,
});
const News = mongoose.model("News", newsSchema);
module.exports = News;
