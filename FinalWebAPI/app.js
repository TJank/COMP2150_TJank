var express = require('express');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://jank:DBpass@ds259119.mlab.com:59119/csgoplayers'
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection error.'));

// import about router
var aboutRouter = require('./routes/about');

// Import Player router
var playerRouter = require('./routes/playerRouter')

// initialize server variable
var app = express();

// use the 'about' route in this app
app.use('/about', aboutRouter);
app.use('/', playerRouter);





app.listen(8000, () => {
    console.log('App is listening on port 8000!')
});
