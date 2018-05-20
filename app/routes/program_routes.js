ProgController = require('../controllers/program_controller');

module.exports = function (app, db) {
	app.post('/programs', (req, res) => {
		ProgController.create_programs(req, res, db);
	});
	app.get('/programs', (req, res) => {
		ProgController.list_programs(res, db);
	});
};
