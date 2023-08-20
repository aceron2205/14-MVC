const router = require("express").Router();
const {Post, Comment} = require("../models");

router.get("/", async (req, res) => {
    try {
        const dashInformation = await Post.findAll(
            {
                where: {
                    user_id: req.session.user_id
                }
            }
        );

        const posts = dashInformation.map((postData) => postData.get({plain: true}));

        res.render("dashboard", {
            posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
