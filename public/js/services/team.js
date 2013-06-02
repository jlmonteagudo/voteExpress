'use strict';


angular.module('voteApp')
  .factory('Team', function($resource) {

    return $resource(
      'http://localhost:port/teams/:id',
      {
        port: ':3000',
        id: '@id'
      }, 
      {
        'list': {method: 'GET', isArray: true},
        'update': {method: 'PUT'}
      }
    );

  });

