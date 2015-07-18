(function() {
    'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:ProductsCtrl
	 * @description
	 * # ProductsCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('ProductsCtrl', ['$scope', 'productsService', function ($scope, productsService) {

			$scope.products = {};
			console.log('Query the database for products!');
			$scope.products = productsService.query();
		}]);
})();