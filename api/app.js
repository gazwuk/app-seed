/*
 * Dependencies
 */
var express = require('express');
var mongoose = require('mongoose');
var db = require('./db');

/*
 * Bootstrap App
 */
var app = express();

/*
 * Bootstrap Controllers
 */
var Controller = require('./controllers/Controller');

/*
 * Routes
 */
app.get('/demo/', Controller.findAll);

/*
 * Here we go
 */
app.listen(process.env.PORT || 4730);
