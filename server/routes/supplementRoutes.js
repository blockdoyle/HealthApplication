const express = require('express');
const router = express.Router();
const Supplement = require('../models/Supplement');

// Get all supplements
router.get('/', async (req, res) => {
  try {
    const supplements = await Supplement.find();
    res.json(supplements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get supplement by ID
router.get('/:id', async (req, res) => {
  try {
    const supplement = await Supplement.findById(req.params.id);
    if (!supplement) {
      return res.status(404).json({ message: 'Supplement not found' });
    }
    res.json(supplement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add new supplement
router.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newSupplement = new Supplement({
      name,
      description,
      price,
    });
    await newSupplement.save();
    res.status(201).json({ message: 'Supplement added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update supplement
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const updatedSupplement = await Supplement.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true }
    );
    if (!updatedSupplement) {
      return res.status(404).json({ message: 'Supplement not found' });
    }
    res.json({ message: 'Supplement updated successfully', updatedSupplement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete supplement
router.delete('/:id', async (req, res) => {
  try {
    const deletedSupplement = await Supplement.findByIdAndDelete(req.params.id);
    if (!deletedSupplement) {
      return res.status(404).json({ message: 'Supplement not found' });
    }
    res.json({ message: 'Supplement deleted successfully', deletedSupplement });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
