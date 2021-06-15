"use strict";

//EXPRESS
var express = require('express');

var app = express(); //PATH

var path = require('path'); //PORT


var PORT = process.env.PORT || 5000;
app.use(express["static"](path.resolve(__dirname, 'client'))); //ROUTES

var enRoute = require('./route/enRoute');

var heRoute = require('./route/heRoute');

app.use('/english', enRoute);
app.use('/hebrew', heRoute);
app.get('/', function (req, res) {
  res.status(200); //default status

  res.sendFile(path.join(__dirname, 'client', 'en', 'index.html'));
});
app.listen(PORT, function () {
  console.log("listen to http://localhost:".concat(PORT));
});