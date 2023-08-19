// Load environment variables from .env file
require('dotenv').config();

const {LogEntrie} = require('../models/ph.js')
// Import necessary modules
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

// Create Express app
const app = express();

// Set up your middleware, routes, etc.
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// GET route to fetch all log entries
app.get('/logentries', async (req, res) => {
  try {
    const logEntries = await LogEntrie.findAll();
    res.json(logEntries);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});