var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;

var server = app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});