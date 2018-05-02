var mongoose = require('mongoose');
var listingTemplate = require('./listingTemplate');

module.exports = mongoose.model('savedItem', new mongoose.Schema(listingTemplate));