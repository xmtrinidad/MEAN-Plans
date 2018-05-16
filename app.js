const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

// Routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');

// Initialize Express
const app = express();

// CORS Middleware
app.use(cors());

// Connect to mongoose
mongoose.connect('mongodb://localhost/plans')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Express JSON Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route Middleware
app.use('/user', userRoutes);
app.use('/', indexRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
