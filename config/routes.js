

module.exports = function (app) {

  var teams = require('../app/controllers/teams');
  app.get('/teams', teams.list);
  app.put('/teams/:id', teams.update);

}
