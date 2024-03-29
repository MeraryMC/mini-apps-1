//to start a server file, you _must_ require express
var express = require('express');
var path = require('path');
var fs = require('fs');
//need body parser to handle our inputs
var bodyParser = require('body-parser');
//set your port name, will be used in app.listen
var port = 8080;
//invoke express
var app = express();

var filepath = 'samples/sales_report.json';

var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

app.use(bodyParser.json({type: 'application/json'}));

//tell express where to start serving up the files, will 
//look for index.html file by itself!
app.use(express.static(path.join(__dirname, 'client')));



//actually have the server running
app.listen(port,function(){
    console.log("Server Is up and running!");
   });



//exporting our functions elsewhere
module.exports = function (app) {
    // do something with app
  };