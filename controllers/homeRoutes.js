const router = require("express").Router();
const {Post, User, Comment} = require("../models");

router.get("/", async (req, res) => {
    try {
        const postInformation = await Post.findAll({
            attributes: ["title", "content", "id"],
        });

        const posts = postInformation.map((postData) =>
            postData.get({plain: true})
        );
        res.render("homepage", {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get("/post-blog", async (req, res) => {
    res.render("post-blog");
});

router.get("/post/:id", async (req, res) => {
    try {
        const postInformation = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ["id", "comment", "post_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
                {
                    model: User,
                    attributes: ["username"]
                }
            ],
        });

        const post = postInformation.get({plain: true});
        console.log(post)
        res.render("post", {
            loggedIn: req.session.loggedIn,
            post,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('*', (req, res) => {
    res.status(404).send("Page not Found");
})

module.exports = router;
