/* eslint-disable no-undef */
const db = require("../config/connection");
const { Exercise, User } = require("../models");
const exerciseData = require("./exerciseData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await Exercise.create(exerciseData);
  await User.create(userData);
  console.log("exercises seeded");
  process.exit(0);
});
