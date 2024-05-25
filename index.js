const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// grocery items
const groceries = [
  { id: 1, name: 'Apples', price: 2.5 },
  { id: 2, name: 'Bananas', price: 1.5 },
  { id: 3, name: 'Milk', price: 3.0 },
 
];

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to get all grocery items
app.get('/api/groceries', (req, res) => {
  res.json(groceries);
});

// Route to get a specific grocery item by ID
app.get('/api/groceries/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const grocery = groceries.find(item => item.id === id);
  if (!grocery) {
    return res.status(404).json({ message: 'Grocery item not found' });
  }
  res.json(grocery);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
