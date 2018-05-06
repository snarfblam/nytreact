var mongoose = require('mongoose');

module.exports = mongoose.model('savedItem', new mongoose.Schema(new Template([
    "url            string      required",
    "title          string      required", 
    "summary        string      required",
])));