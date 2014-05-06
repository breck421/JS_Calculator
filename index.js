// set up ========================
var express = require('express'),
	ejs = require('ejs');

var calc = require('./routes/calc.js');

var app = express();

// PROD && DEV
app.configure(function() {
	app.set('views', __dirname + '/views');
	app.engine('html', ejs.renderFile);
	app.use(express.static(__dirname + '/public'));
});

app.get('/', calc.index);

app.listen(3000);
console.log('Listening at http://localhost:3000');