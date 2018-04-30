// Import the required modules:
var express = require('express');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://chris:1234@ds125198.mlab.com:25198/cars';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error.'));

// Import the 'about' router
var aboutRouter = require('./routes/about');

// Import car router
var carRouter = require('./routes/carRouter');

// Initialize express server variable
var app = express();

// Use the 'about' route in this app
app.use('/about', aboutRouter);
app.use('/', carRouter);

app.listen(8000, () => {
    console.log('App is listening on port 8000!')
    });