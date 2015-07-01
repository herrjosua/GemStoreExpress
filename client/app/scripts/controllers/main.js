'use strict';

/**
    * @ngdoc function
    * @name gemStoreApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the gemStoreApp
*/

angular.module('gemStoreApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

// angular.module('gemStoreApp', ['gemStoreApp.productService'])
//  .controller('MainCtrl', ['$scope', '$log', 'productsService', function ($scope,$log,productsService) {

//      console.log('hi?');

//      $scope.awesomeThings = [
//          'HTML5 Boilerplate',
//          'AngularJS',
//          'Karma'
//      ];

//      console.log($scope.awesomeThings);

//      $scope.products = {};

//      $scope.products = productsService.query();

//      console.log($scope.products);

//  }]);