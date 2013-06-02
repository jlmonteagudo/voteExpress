'use strict';


angular.module('voteApp')
  .controller('TeamCtrl', function ($scope, $http, Socket, Team) {

    $scope.disableVote = false;

    //$scope.teams = Team.list();
    $http.get('/teams').success(function(data) {
      $scope.teams = data;
    });


    $scope.vote = function(team) {
    	team.votes = team.votes + 1;
    	$http.put('/teams/' + team._id, team).success(function(data) {
        $scope.disableVote = true;
      });
    };


    Socket.on('team:updated', function (team) {
      $http.get('/teams').success(function(data) {
        $scope.teams = data;
      });
      $.pnotify({title: 'Vote', text: '+1 vote for ' + team.name });
    });


  });

