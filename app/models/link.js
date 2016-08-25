var mongoose = require('../config');
var crypto = require('crypto');
var linkSchema = mongoose.Schema({
  id: Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});
linkSchema.pre('save', function(next) {
  this.visits = 0;
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
  next();
}); 
var Link = mongoose.model('Link', linkSchema);

// Link.on('')
// var Link = new db.models.Url({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
      // var shasum = crypto.createHash('sha1');
      // shasum.update(model.get('url'));
      // model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// var steve = new Link({ url: 'http://www.google.com' })
//   .save(function (err, steve) {
//     console.log(steve);
//     return steve;
//   })
//   .then(function () {
//     console.log('kill me');
//   });



module.exports = Link;
