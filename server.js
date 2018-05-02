const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const models = require('./models');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 8080;
const mongoUrl = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
    'mongodb://localhost/nytimes';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({}));
app.use(apiRoutes);
    
mongoose.connect(mongoUrl, function (err) {
    if (err) {
        console.log("Mongoose error", err);
    } else {
        console.log('Riding the mongose');
    }
});

const server = app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});