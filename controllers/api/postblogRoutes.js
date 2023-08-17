const router = require("express").Router();
const { Blog } = require("../../models");

// CREATE new blog
router.post("/", async (req, res) => {
  try {
    // Ensure title and content are provided in the request body
    if (!req.body.title || !req.body.content) {
      return res
        .status(400)
        .json({ error: "Both title and content are required." });
    }

    // Assuming you have a user_id, either from authentication or as a default value
    const user_id = req.user ? req.user.id : DEFAULT_USER_ID;

    const blogPost = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: user_id, // Provide the user_id here
    });

    res.redirect("/post-blog"); // Redirect to the post-blog page after successful creation
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the blog post." });
  }
});

module.exports = router;
