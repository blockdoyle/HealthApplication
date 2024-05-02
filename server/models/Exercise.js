/* eslint-disable no-undef */
const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  caloriesBurned: { type: Number, required: true },
  // sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  bodyPart: { type: String, required: true },
});

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
