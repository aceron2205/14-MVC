const blogSeed = require("./blogSeed");
const commentSeed = require("./commentSeed");
const userSeed = require("./userSeed");

const sequelize = require("../config/connection");

const seeding = async () => {
  await sequelize.sync({ force: true });
  console.log("--- DATABASE SYNCED ---");
  await userSeed();
  console.log("--- USER SEEDED ---");
  await blogSeed();
  console.log("--- BLOG SEEDED ---");
  await commentSeed();
  console.log("--- COMMENT SEEDED ---");
  process.exit(0);
};

seeding();
