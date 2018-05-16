module.exports = function (app, db) {
	app.post('/programs', (req, res) => {
		console.log(req);
		res.send('Hello');
	});
};
