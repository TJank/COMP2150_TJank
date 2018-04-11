var express = require('express');
// import about router
var aboutRouter = require('./routes/about');

// initialize server variable
var app = express();

// use the 'about' route in this app
app.use('/about', aboutRouter);






app.listen(8000, () => {
    console.log('App is listening on port 8000!')
});
