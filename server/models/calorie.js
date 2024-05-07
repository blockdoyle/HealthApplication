const mongoose = require("mongoose");

const calorieSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  daily_calorie_intake: { type: Number, required: true },
  daily_calorie_expenditure: { type: Number, required: true },
  net_calorie_balance: {
    type: Number,
    required: true,
    // Calculate net calorie balance as intake minus expenditure
    default: function () {
      return this.daily_calorie_intake - this.daily_calorie_expenditure;
    },
  },
  soft_max_caloric_intake: {
    type: Number,
    // This value should be taken from the user's document
    required: false, // changed to false because it's not required
  },
});

module.exports = mongoose.model("Calorie", calorieSchema);
