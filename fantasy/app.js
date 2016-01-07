var express = require('express');
var app = express();
var scraper = require('./scripts/scraper')
var csvConverter = require('./scripts/csvConverter')

app.use(express.static('public'));
app.get('/', function (req, res){
   res.sendFile(__dirname + '/views/graphs.html'); 
});

app.get('/history', scraper);
app.get('/transactions.csv', csvConverter);


var server = app.listen(3000);
