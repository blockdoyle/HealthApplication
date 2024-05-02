/* eslint-disable no-undef */
const db = require("../config/connection");
const { Exercise } = require("../models");
const exerciseData = require("./exerciseData.json");

db.once("open", async () => {
  await Exercise.create(exerciseData);
  console.log("exercises seeded");
  process.exit(0);
});
