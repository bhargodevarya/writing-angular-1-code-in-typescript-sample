'use strict';

angular.module('myApp.SimpleStuff', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SimpleStuff', {
    templateUrl: 'SimpleStuff/view.html'
  });
}]);