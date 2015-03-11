'use strict';

var users = angular.module('rantly.users', ['ngRoute']);

users.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  }).
  when('/users/:userId', {
    templateUrl: 'users/user.html',
    controller: 'UsersDetailCtrl'
  });
}]);


users.controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/users/').success(function(data) {
    $scope.users = data.users;
  });
}]);

users.controller('UsersDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://localhost:3000/users/' + $routeParams.userId).success(function(data) {
      $scope.user = data.user;
  });
}]);
