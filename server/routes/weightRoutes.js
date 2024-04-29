const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Weight = require('../models/Weight');

// Add weight entry
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { weight } = req.body;
    const newWeight = new Weight({
      userId: req.user.userId,
      weight,
    });
    await newWeight.save();
    res.status(201).json({ message: 'Weight entry added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get daily weight entries
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const today = new Date().setHours(0, 0, 0, 0);
    const weightEntries = await Weight.find({ userId, date: { $gte: today } });
    res.json(weightEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
