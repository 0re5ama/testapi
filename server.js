const express = require('express'),
	MongoClient = require('mongodb').MongoClient,
	bodyParser = require('body-parser'),
	app = express(),
	port = 80;


const routes = require('./app/routes') (app, {});
app.listen(port, () => {
	console.log('hello world');
});
