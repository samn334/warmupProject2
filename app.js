// app.js
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var UserController = require('./user/UserController');
var db = require('./db');

//create express app
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //access static files in ‘public’ folder

app.use('/', routes);
app.use('/users', UserController);

module.exports = app;