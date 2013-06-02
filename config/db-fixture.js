var mongoose = require('mongoose')
	, Team = mongoose.model('Team');

module.exports = function () {


	Team.remove(function (err) {});

	var spain = new Team(
	{
		code: 'spain',
		name: 'Spain',
		urlImage: '/img/spain.jpg',
		vote: 0
	});


	var brazil = new Team(
	{
		code: 'brazil',
		name: 'Brazil',
		urlImage: '/img/brazil.jpg',
		vote: 0
	});


	var germany = new Team(
	{
		code: 'germany',
		name: 'Germany',
		urlImage: '/img/germany.jpg',
		vote: 0
	});


	var argentina = new Team(
	{
		code: 'argentina',
		name: 'Argentina',
		urlImage: '/img/argentina.jpg',
		vote: 0
	});


	var other = new Team(
	{
		code: 'other',
		name: 'Other',
		urlImage: '/img/other.jpg',
		vote: 0
	});



	spain.save();
	brazil.save();
	germany.save();
	argentina.save();
	other.save();

}

