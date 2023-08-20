const {User} = require("../models");
const userData = [
    {
        id: 1,
        username: "lalulis",
        email: "a@abc.com",
        password: "12345678"
    },
    {
        id: 2,
        username: "lizzy3",
        email: "elizthethird@abc.com",
        password: "kinggeorge"
    },
    {
        id: 3,
        username: "geo2354",
        email: "kinggeorge@abc.com",
        password: "farmergeorge"
    },

];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
