require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', require('./routes/auth.routes'));
app.use('/api/v1/products', require('./routes/product.routes'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Product Inventory Management API' });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});