'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngMaterial', 'ui.bootstrap', 'ngRoute', 'ngAnimate',
    'myApp.cardView', 'myApp.timeline'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/cardView'});
}]);
