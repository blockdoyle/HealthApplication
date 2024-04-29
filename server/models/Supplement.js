const mongoose = require('mongoose');

const supplementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  //Adding more fields like image, quantity, etc. as per requirements
});

module.exports = mongoose.model('Supplement', supplementSchema);
