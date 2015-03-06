'use strict';

var rants = angular.module('rantly.rants', ['ngRoute']);

rants.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'rants/rants.html',
    controller: 'RantsCtrl'
  }).
  when('/new', {
    templateUrl: 'rants/new.html',
    controller: 'NewRantCtrl'
  });
}]);

rants.controller('RantsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/rants').success(function(data) {
    $scope.rants = data.rants;
  });
}]);

rants.controller('NewRantCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.createRant = function() {
      $http.post('http://localhost:3000/rants/', { title: title, body: body });
      $scope.title = '';
      $scope.body = '';
      $location.path('/rants');
    };
}]);
