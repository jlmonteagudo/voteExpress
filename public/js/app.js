'use strict';


angular.module('voteApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/team/list.html',
        controller: 'TeamCtrl'
      });
  });
