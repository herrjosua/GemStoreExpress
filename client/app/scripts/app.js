'use strict';

/**
    * @ngdoc overview
    * @name gemStoreApp
    * @description
    * # gemStoreApp
    *
    * Main module of the application.
*/
angular.module('gemStoreApp', ['ngResource', 'ui.router', 'ui.bootstrap', 'restangular', 'ncy-angular-breadcrumb', 'gemStoreApp.usersService', 'gemStoreApp.productService'])
    //for ui-router
    .config(function ($stateProvider, $urlRouterProvider) {

        // Setting up the states
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                ncyBreadcrumb: {
                    label: 'Home'
                }
            })

            .state('about', {
                url:'/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                ncyBreadcrumb: {
                    parent: 'home',
                    label: 'About'
                }
            })

            .state('users', {
                url:'/users',
                templateUrl: 'views/users.html',
                controller: 'UsersCtrl',
                ncyBreadcrumb: {
                    parent: 'home',
                    label: 'Users'
                }
            })

            .state('products', {
                url:'/products',
                templateUrl: 'views/products.html',
                controller: 'productsCtrl',
                ncyBreadcrumb: {
                    parent: 'home',
                    label: 'Products'
                }
            })

            .state('productDetails', {
                url:'/:id',
                templateUrl: 'views/product-detail.html',
                controller: 'ProductDetailCtrl',
                ncyBreadcrumb: {
                    parent: 'products',
                    label: '{{product.name}}'
                }
            }); 

        // For any unmatched route redirect to the root
        $urlRouterProvider.otherwise('home');
    })

    // Override of the ncuillery angular-breadcrumb plug
    .config(function($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            templateUrl: 'scripts/directives/breadcrumbs/breadcrumbs.html',
        });
    })

    // Config for Restangular
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('/');

        RestangularProvider.setRestangularFields({
            id: '_id.$oid'
        });

        RestangularProvider.setRequestInterceptor(function (elem, operation) {
            if (operation === 'put') {
                elem._id = undefined;
                return elem;
            }
            return elem;
        });
    });