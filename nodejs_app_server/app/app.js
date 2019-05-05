// Load the express module
var express = require('express');
var app = express();

// Respond to requests for / with 'Hello World'.
app.get('/', function(req, res){
    res.send('Hello World!') ;
});

// Listen on port 80 (lik a true web server)
app.liste(80);
console.log('Express server started successfully.');
