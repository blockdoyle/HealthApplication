const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  intake: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // Adding more other fields as needed
});

module.exports = mongoose.model('Calorie', calorieSchema);