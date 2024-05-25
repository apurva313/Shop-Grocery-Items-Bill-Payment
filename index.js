const express = require('express');
const connectDB = require('./db');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 3000;
const groceryRoutes = require('./routes/groceryRoutes');

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the grocery routes
app.use('/api', groceryRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
