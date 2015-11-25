var express = require('express');
var app = express();
var cheerio = require('cheerio');
var jquery = require('jquery');
var fs = require('fs');

app.use(express.static('public'));
app.get('/', function (req, res){
   res.sendFile(__dirname + '/views/index.html'); 
});
app.get('/history', function(req, res){
    var file = fs.readFileSync(__dirname + '/public/history.html', {"encoding": "UTF-8"});
    console.log(file);
    var html = cheerio.load(file);
    
    res.json({"hello": "world"})
});

var server = app.listen(3000);