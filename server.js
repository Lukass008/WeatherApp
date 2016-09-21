var express = require('express'),
	bodyParser = require('body-parser'),
	router = require('./app/routes/router.js');

var app = express();

app.use(express.static(__dirname + '/www'));

app.use('/', router);

app.listen(3000, function() {
	console.log("Server is listening on 3000...")
});