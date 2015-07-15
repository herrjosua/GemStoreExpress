'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp')
	.controller('ProductsCtrl', ['$scope', '$state', '$http', 'productsService', function ($scope, $state, $http, productsService) {

		$scope.products = {};
		console.log('Query the database for products!');
		$scope.products = productsService.query();

		//$scope.orderProp = "name"		
	}]);