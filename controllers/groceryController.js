const Grocery = require('../models/groceryModel');

const getAllGroceries = async (req, res) => {
  try {
    const groceries = await Grocery.find();
    res.json(groceries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getGroceryById = async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
    res.json(grocery);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createGrocery = async (req, res) => {
  try {
    const newGrocery = new Grocery({
      name: req.body.name,
      price: req.body.price
    });
    const grocery = await newGrocery.save();
    res.status(201).json(grocery);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateGrocery = async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
    grocery.name = req.body.name || grocery.name;
    grocery.price = req.body.price || grocery.price;
    await grocery.save();
    res.json(grocery);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteGrocery = async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
    await grocery.remove();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllGroceries,
  getGroceryById,
  createGrocery,
  updateGrocery,
  deleteGrocery,
};
