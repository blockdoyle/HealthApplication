const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sex: { type: String, enum: ["male", "female", "other"] },
  height: { type: Number },
  weight: { type: Number },
  age: { type: Number },
  maximumCaloricIntake: { type: Number },
  favouriteExercises: [{ type: String }],
});

module.exports = mongoose.model('User', userSchema);
