const { Blog } = require("../models");
const blogData = [
  {
    id: 1,
    title: "Versatility of JS",
    content: 
    "Usefull in both backend and frontend, they key to its efficiency is having creativity and mastering your basics.",
    user_id: 1,
  },
  {
    id: 2,
    title: "Intro to Bulma",
    content: 
    " Bulma is a lightweight and modern CSS framework that emphasizes simplicity and flexibility. It offers a responsive grid system, pre-styled components, and extensive utility classes, making it easy to build responsive and visually appealing websites.",
    user_id: 1,
  },
  {
    id: 3,
    title: "What is Node.Js?",
    content: 
    "Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side. It provides a platform for building scalable and efficient network applications and web services using JavaScript.",
    user_id: 2,
  },

];

const blogSeed = () => Blog.bulkCreate(blogData);
module.exports = blogSeed;
