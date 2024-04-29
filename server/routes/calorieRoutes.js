const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Calorie = require('server\models\calorie.js');

// Add calorie intake
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { intake } = req.body;
    const newCalorie = new Calorie({
      userId: req.user.userId,
      intake,
    });
    await newCalorie.save();
    res.status(201).json({ message: 'Calorie intake added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get daily calorie intake
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const today = new Date().setHours(0, 0, 0, 0);
    const calorieIntake = await Calorie.find({ userId, date: { $gte: today } });
    res.json(calorieIntake);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
