ProgController = require('../controllers/program_controller');

module.exports = function (app, db) {
  app.post('/programs', (req, res) => {
    ProgController.create_programs(req, res, db);
  });
  app.get('/programs', (req, res) => {
    ProgController.list_programs(res, db);
  });
  app.get('/programs/samadhi', (req, res) => {
    ProgController.list_samadhi(res, db);
  });
  app.get('/programs/pragya', (req, res) => {
    ProgController.list_pragya(res, db);
  });
  app.get('/programs/:id', (req, res) => {
    ProgController.program_det(req, res, db);
  });
};
