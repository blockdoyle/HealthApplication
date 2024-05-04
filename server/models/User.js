const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sex: { type: String, enum: ["male", "female", "other"] },
  height: { type: Number },
  heightUnit: { type: String, default: "cm" },
  weight: { type: Number },
  weightUnit: { type: String, default: "kg" },
  age: { type: Number },
  maximumCaloricIntake: { type: Number },
  favouriteExercises: [{ type: String }],
  fitnessGoals: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
