require("dotenv").config();
const MONGODB = process.env.MONGODB || "mongodb://localhost:27017/healthApp";
module.exports = {
  MONGODB,
};
