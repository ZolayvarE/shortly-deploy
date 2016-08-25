var app = require('./server-config.js');
var morgan = require('morgan');


var port = process.env.PORT || 4568;
app.use(morgan('dev'));
app.listen(port);

console.log('Server now listening on port ' + port);
