'use strict';

var users = angular.module('rantly.users', ['ngRoute']);

users.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  }).
  when('/signup', {
    templateURL: 'users/signup.html',
    controller: 'SignUpCtrl'
  });
}]);

users.controller('UsersCtrl', [function() {

}]);

users.controller('SignUpCtrl', [function() {

}]);
