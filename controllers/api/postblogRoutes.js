const router = require("express").Router();
const { Blog } = require("../../models");

// CREATE new blog
router.post("/", async (req, res) => {
  try {
    const blogPost = await Blog.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.status(200).json(blogPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
