/* eslint-disable no-undef */
const db = require("../config/connection");
const { Exercise, User } = require("../models");
const exerciseData = require("./Exercise.json");
const userData = require("./Users.json");

db.once("open", async () => {
  await Exercise.create(exerciseData);
  await User.create(userData);
  console.log("exercises seeded");
  process.exit(0);
});
