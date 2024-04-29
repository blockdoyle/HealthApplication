const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  //Adding more other fields as needed
});

module.exports = mongoose.model('Weight', weightSchema);
