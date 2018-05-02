var mongoose = require('mongoose');
var Template = require('./Template');

// javascript ORM syntaxes make me sick
var template = new Template([
    "url            string      required",
    "title          string      required", 
    "summary        string      required",
    "source         string      required",
    "contentId      string      required index unique",
    "date           date        required",
]);


module.exports = template;