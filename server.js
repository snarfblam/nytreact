const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const models = require('./models');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const mongoUrl = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL ||
    'mongodb://localhost/nytimes';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({}));
app.use(apiRoutes);

app.get('*', (req, res) => {
    var indexPath = path.join(__dirname, 'client', 'build', 'index.html');
    res.sendfile(indexPath);
});
    
mongoose.connect(mongoUrl, function (err) {
    if (err) {
        console.log("Mongoose error", err);
    } else {
        console.log('Riding the mongoose');
    }
});

const server = app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});