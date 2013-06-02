var mongoose = require('mongoose')
	, Team = mongoose.model('Team')


exports.list = function(req, res) {
	Team.find({}, function(err, teams) {
		res.json(teams);
	});
}


exports.update = function(req, res){
	var team = new Team(req.body);
	Team.update({ _id: team.id }, {votes: team.votes}, function (err, numberAffected, raw) {
		var socketIO = global.socketIO; 
		socketIO.sockets.emit('team:updated', team);
		res.json(true);
	});
}

