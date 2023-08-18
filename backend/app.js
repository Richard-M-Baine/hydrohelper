// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');

// Create Express app
const app = express();

// Set up your middleware, routes, etc.

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});