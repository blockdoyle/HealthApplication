const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  startWeight: { type: Number, required: true },
  goalWeight: { type: Number, required: true },
  weightLoss: {
    type: Number,
    default: function () {
      return this.startWeight - this.weight;
    },
  },
});

module.exports = mongoose.model("Weight", weightSchema);
