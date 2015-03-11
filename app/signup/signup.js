'use strict';

var sign = angular.module('rantly.signup', ['ngRoute']);

sign.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/signup', {
    templateURL: 'signup/signup.html',
    controller: 'SignUpCtrl'
  });
}]);


sign.controller('SignUpCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.registerUser = function () {
    $http.post('http://localhost:3000/users/new',
    {first_name: fname, last_name: lname, email: email, password: password});
    $scope.first_name = '',
    $scope.last_name = '',
    $scope.email = '',
    $scope.password = '',
    $location.path('/')
  };
}]);
