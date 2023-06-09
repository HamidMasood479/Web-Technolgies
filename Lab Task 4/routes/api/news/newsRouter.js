const express = require("express");
const router = express.Router();
const News = require("../../../models/news.js");

router.get("/newsedit/:id", async (req, res) => {
  let news = await News.findById(req.params.id);
  res.render("newsedit", { news });
});

router.get("/addnewsform", (req, res) => {
  res.render("addnewsform");
});
router.get("/newslist", async (req, res) => {
  let news = await News.find();
  res.render("newslist", { news });
});

router.get("/:id", async (req, res) => {
  let news = await News.findById(req.params.id);
  res.render("newsindividual", { news });
});

router.get("/delete/:id", async (req, res) => {
  let news = await News.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.delete("/delete/:id", async (req, res) => {
  let news = await News.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.get("/", async (req, res) => {
  let news = await News.find();
  res.render("news", { news });
});

router.post("/newsedit/:id", async (req, res) => {
  let news = await News.findByIdAndUpdate(req.params.id, req.body);
  await news.save();
  res.redirect("/");
});

router.post("/addnewsform", async (req, res) => {
  let newNews = new News(req.body);
  await newNews.save();
  res.redirect("/");
});

module.exports = router;
