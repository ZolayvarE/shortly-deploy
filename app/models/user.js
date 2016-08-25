var mongoose = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userSchema = mongoose.Schema({
  id: Number,
  username: String,
  password: String,
});

userSchema.pre('save', function(next, test) {
  console.log(next, test);
  this.password = bcrypt.hashSync(this.password, null, null);
  console.log(this.password);
  next();
});
userSchema.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
    callback(isMatch);
  });
};
var User = mongoose.model('User', userSchema);


// var steve = new User({
//   username: 'steve',
//   password: 'kill me'
// }).save().then(function(){
//   console.log('')
// });
// .update(function(err, steve) {
//   console.log(err, steve, 'test');
//   return steve;
// }).save(function(test, steve) {
//   console.log(test, steve);
// });
// .save(function(err, stever) {
//   console.log(stever);
// });


// var User = db.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   initialize: function() {
//     this.on('creating', this.hashPassword);
//   },
//   comparePassword: function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
//       callback(isMatch);
//     });
//   },
//   hashPassword: function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.get('password'), null, null).bind(this)
//       .then(function(hash) {
//         this.set('password', hash);
//       });
//   }
// });


module.exports = User;
