const programRoutes = require('./program_routes.js');

module.exports = function (app, db) {
	programRoutes(app, db);
};
