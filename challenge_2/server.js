//to start a server file, you _must_ require express
var express = require('express');

//set your port name, will be used in app.listen
var port = 3000;

//invoke express
var app = express();



//actually have the server running
app.listen(port,function(){
    console.log("Server Is up and running!");
   });

//exporting our functions elsewhere
module.exports = function (app) {
    // do something with app
  };