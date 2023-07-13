const { Comment } = require("../models");
const commentData = [
  {
    id: 1,
    comment:
      "I personally prefer using python, i like that it tells me whats my error",
    user_id: 1,
    post_id: 1,
  },
  {
    id: 2,
    comment: "Have you tried bulma",
    user_id: 1,
    post_id: 2,
  },
];

const seedBlog = () => Comment.bulkCreate(commentData);
module.exports = seedBlog;
