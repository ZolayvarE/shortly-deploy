// NOTE: this file is not needed when using MongoDB
var mongoose = require('../config');
var Link = require('../models/link');

var Links = mongoose.connection.db.collection('linkSchema');

// console.log(Links);


Link.find({}, function (err, res) {
  console.log(res);
});
// var Links = new db.Collection();

// Links.model = Link;

module.exports = Links;