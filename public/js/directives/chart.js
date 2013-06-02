'use strict';

angular.module('voteApp')
  .directive('chart', function () {
    return {
      template: '<div id="chart"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.$watch('teams', function(newValue, oldValue, scope) {

          if (newValue === undefined) return;
          var chartTeams = newValue.map(function(team) {
            return [team.name, team.votes];
          });

          var data = google.visualization.arrayToDataTable(chartTeams, true);
          var googleChart = new google.visualization.PieChart(document.getElementById('chart'));
          googleChart.draw(data);


        });

      }

    };

  });
