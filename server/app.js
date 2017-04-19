/*
var express = require('express')
	,mongoose = require('mongoose')
	,app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/draftHelper')

app.get('/', function(req, res) {
	res.send('Olá, mundo!');
});

app.listen(8080, function() {
	console.log('Server is running at localhost:8080');
})
*/

require('rootpath')();
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use JWT auth to secure the api
app.use(expressJwt({ secret: config.secret }).unless({ path: ['/summoners/authenticate', '/summoners/register'] }));

// routes
app.use('/summoners', require('./controllers/summoners.controller'));

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 4000;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
