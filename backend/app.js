// Load environment variables from .env file
require('dotenv').config();

const {LogEntrie} = require('./models')
// Import necessary modules
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
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

app.post('/logentries/post', async (req, res) => {
  try {
    // Extract data from the request body
    const { date, time, ph, ppm, temperature, photograph } = req.body;
console.log(date, time, ph, ppm, temperature)
    // Create a new log entry in the database
    const newLogEntry = await LogEntrie.create({
      date,
      time,
      ph,
      ppm,
      temperature,
      photograph
    });

    return res.status(201).json({
      message: 'Log entry created successfully',
      logEntry: newLogEntry
    });
  } catch (error) {
    console.error('Error creating log entry:', error);
    return res.status(500).json({
      message: 'An error occurred while creating the log entry'
    });
  }
});


app.delete('/logentries/:id', async (req, res) => {
  const logEntryId = req.params.id;

  try {
    // Find the log entry by ID
    const logEntry = await LogEntrie.findByPk(logEntryId);

    if (!logEntry) {
      return res.status(404).json({ message: 'Log entry not found' });
    }

    // Delete the log entry
    await logEntry.destroy();

    res.status(204).send(); // 204 No Content
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