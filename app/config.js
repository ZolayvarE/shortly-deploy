// var path = require('path');
// var knex = require('knex')({
//   client: 'mongodb',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:9876');
var db = mongoose.connection;
db.once('open', function() {
  console.log('we in');
});



// db.knex.schema.hasTable('urls').then(function(exists) {
//   if] (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = mongoose;
