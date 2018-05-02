var mongoose = require('mongoose');
var listingTemplate = require('./listingTemplate');

// module.exports = mongoose.model('scraping', new mongoose.Schema(listingTemplate, { capped: { size: 0x10000000, max: 100 } }));
module.exports = mongoose.model('scraping', listingTemplate.toSchema({ capped: { size: 0x10000000, max: 100 } }));