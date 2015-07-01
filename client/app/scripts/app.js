'use strict';

/**
    * @ngdoc overview
    * @name gemStoreApp
    * @description
    * # gemStoreApp
    *
    * Main module of the application.
*/
angular.module('gemStoreApp', ['ngResource','ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
