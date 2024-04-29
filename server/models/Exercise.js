const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  caloriesBurned: { type: Number, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  bodyPart: { type: String, required: true },
  //Adding more fields like description, image, etc. as per requirements
});

module.exports = mongoose.model('Exercise', exerciseSchema);
