'use strict';

var rants = angular.module('rantly.rants', ['ngRoute']);

rants.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rants', {
    templateUrl: 'rants/rants.html',
    controller: 'RantsCtrl'
  });
}]);

rants.controller('RantsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/rants').success(function(data) {
    $scope.rants = data.rants;
  });
}]);
