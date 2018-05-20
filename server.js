const express = require('express'),
	MongoClient = require('mongodb').MongoClient,
	bodyParser = require('body-parser'),
	app = express(),
	port = 80,
	config = require('./config');


app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(config.db.url, { useNewUrlParser: true }, (err, database) => {
	if (err)
		return console.log(err);
	db = database.db('oshodb');
	const routes = require('./app/routes') (app, db);
});


app.listen(port, () => {
	console.log('hello world');
});
