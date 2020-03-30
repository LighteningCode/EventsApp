var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var  port = process.env.PORT || 80

var app = express();


app.use(express.static(__dirname +'../../dist/ng-fundamentals'));
// Start the app by listening on the default


// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../dist/ng-fundamentals'));
});


require('./expressConfig')(app);

require('./passport')();

require('./routes')(app);




app.listen(port);
console.log('Listening on port ' + port + '...');