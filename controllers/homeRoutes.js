const router = require("express").Router();
const { Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postInformation = await Blog.findAll({
      attributes: ["title", "content"],
    });

    const blogs = postInformation.map((blogData) =>
      blogData.get({ plain: true })
    );
    res.render("homepage", {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/post-blog", async (req, res) => {
  res.render("post-blog");
});
module.exports = router;
