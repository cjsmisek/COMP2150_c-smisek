// Import the required modules:
var express = require('express');
// Import the 'about' router
var aboutRouter = require('./routes/about');

// Initialize express server variable
var app = express();

// Use the 'about' route in this app
app.use('/about', aboutRouter);

app.listen(8000, () => {
    console.log('App is listening on port 8000!')
    });