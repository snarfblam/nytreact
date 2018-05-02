var express = require('express');
var mongoose = require('mongoose');
const path = require('path');
const models = require('./models');

var PORT = process.env.PORT || 8080;
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
    'mongodb://localhost/nytimes';

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({}));
    
var server = app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});