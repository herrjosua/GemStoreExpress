'use strict';

/**
    * @ngdoc overview
    * @name gemStoreApp
    * @description
    * # gemStoreApp
    *
    * Main module of the application.
*/
angular.module('gemStoreApp', ['ngResource', 'ui.router', 'ui.bootstrap', 'gemStoreApp.usersService'])
    //for ui-router
    .config(function ($stateProvider, $urlRouterProvider) {

        // Setting up the states
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

            .state('about', {
                url:'/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })

            .state('signup', {
                url:'/signup',
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })

            .state('users', {
                url:'/users',
                templateUrl: 'views/users.html',
                controller: 'UsersCtrl'
            });

        // For any unmatched route redirect to the root
        $urlRouterProvider.otherwise('home');

    });