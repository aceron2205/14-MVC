const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./api/dashboardRoutes");
const postBlogRoutes = require("./api/postblogRoutes");
const userRoutes = require("./api/userRoutes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/post-blog", postBlogRoutes);
router.use("/login", userRoutes);

module.exports = router;
