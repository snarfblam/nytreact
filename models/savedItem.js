var mongoose = require('mongoose');
var Template = require('./Template');
var beauifyUnique = require('mongoose-beautiful-unique-validation');

module.exports = mongoose.model('savedItem', new mongoose.Schema(new Template([
    "url            string      required unique",
    "title          string      required", 
    "summary        string      required",
])).plugin(beauifyUnique));