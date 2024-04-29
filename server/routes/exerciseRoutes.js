const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Get all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get exercise by ID
router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add new exercise
router.post('/', async (req, res) => {
  try {
    const { name, caloriesBurned, sets, reps, bodyPart } = req.body;
    const newExercise = new Exercise({
      name,
      caloriesBurned,
      sets,
      reps,
      bodyPart,
    });
    await newExercise.save();
    res.status(201).json({ message: 'Exercise added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update exercise
router.put('/:id', async (req, res) => {
  try {
    const { name, caloriesBurned, sets, reps, bodyPart } = req.body;
    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      { name, caloriesBurned, sets, reps, bodyPart },
      { new: true }
    );
    if (!updatedExercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.json({ message: 'Exercise updated successfully', updatedExercise });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete exercise
router.delete('/:id', async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!deletedExercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }
    res.json({ message: 'Exercise deleted successfully', deletedExercise });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
