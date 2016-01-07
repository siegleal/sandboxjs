var express = require('express');
var app = express();
var scraper = require('./scripts/scraper')
var csvConverter = require('./scripts/csvConverter')
var users = require('./scripts/users')
var players = require('./scripts/players')
var utils = require('./scripts/mongooseutil');
mongoose = require('mongoose');
mongoose.connect(utils.url);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static('public'));
app.get('/', function (req, res){
   res.sendFile(__dirname + '/views/graphs.html'); 
});

app.get('/history', scraper);
app.get('/transactions.csv', csvConverter);
app.get('/users', users);
app.get('/players/:pos', players);
app.get('/players', players);


var server = app.listen(3000);
