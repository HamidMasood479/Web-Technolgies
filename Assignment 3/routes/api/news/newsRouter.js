const express = require("express");
const router = express.Router();
const News = require("../../../models/news.js");

router.get("/addnewsform", (req, res) => {
  res.render("addnewsform");
});

router.get("/:id", async (req, res) => {
  let news = await News.findById(req.params.id);
  res.render("newsindividual", { news });
});
router.get("/", async (req, res) => {
  let news = await News.find();
  res.render("news", { news });
});

router.post("/addnewsform", async (req, res) => {
  let newNews = new News(req.body);
  await newNews.save();
  res.redirect("/");
});

module.exports = router;
