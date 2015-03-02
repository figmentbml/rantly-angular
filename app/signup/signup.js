'use strict';

var register = angular.module('rantly.signup', ['ngRoute']);

register.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateURL: 'signup/signup.html',
    controller: 'SignUpCtrl'
  });
}]);

register.controller('SignUpCtrl', [function() {

}]);
