'use strict';

/**
 * App
 */

angular.module('fabricApp', [
    'ngRoute',
    'ui.bootstrap',
    'fabricApp.controllers',
    'fabricApp.services'
])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/profile',
        controller: 'ProfileCtrl'
    })
    .when('/fabric/', {
        redirectTo: '/'
    })
	.when('/fabric/:id?', {
        templateUrl: 'partials/home',
        controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
        
    $locationProvider.html5Mode(true);
})
.run(function() {
    $('#loader-wrapper').fadeOut(1000);
});