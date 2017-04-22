var http = require('http');
var express = require('express');
var index = require('./routes/index');
var app = express();
var server = http.createServer(app);
app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

index.active(app);

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
