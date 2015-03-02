'use strict';

// Declare app level module which depends on views, and components
angular.module('rantly', [
  'ngRoute',
  'rantly.rants',
  'rantly.users',
  'rantly.signup',
  'rantly.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/rants'});
}]);
