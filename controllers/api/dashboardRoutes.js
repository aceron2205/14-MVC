const router = require("express").Router();
const { Blog, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const dashInformation = await Blog.findAll({
      attributes: ["title", "content"],
    });

    const blogs = dashInformation.map((blogData) =>
      blogData.get({ plain: true })
    );
    res.render("dashboard", {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
