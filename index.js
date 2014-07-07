// set up ========================
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var ejs = require('ejs');

var app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));


// routes =========================
var calc = require('./routes/calc.js');
var csv = require('./routes/conversions.js');
var freelance = require('./routes/freelance.js');

app.get('/', calc.index);
app.get('/tools', csv.index);
app.get('/freelance', freelance.index);

app.listen(app.get('port'));
console.log('Listening at http://localhost:' + app.get('port'));