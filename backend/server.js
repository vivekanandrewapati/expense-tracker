const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', expenseRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});