const express = require('express');
const router = express.Router();
const {
  getAllGroceries,
  getGroceryById,
  createGrocery,
  updateGrocery,
  deleteGrocery
} = require('../controllers/groceryController');

router.get('/groceries', getAllGroceries);
router.get('/groceries/:id', getGroceryById);
router.post('/groceries', createGrocery);
router.put('/groceries/:id', updateGrocery);
router.delete('/groceries/:id', deleteGrocery);

module.exports = router;
