(function() {
    'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:ProductsPaginationCtrl
	 * @ProductsPaginationCtrl
	 * # ProductsCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('ProductsPaginationCtrl', ['$scope', '$log', 'filterFilter', 'productsService', function ($scope, $log, filterFilter, productsService) {

			$scope.search = {};

			//$scope.products = {};
			//console.log('Query the database for products!');
			//$scope.products = productsService.query();

			console.log("Do I have access to $scope.products? " + angular.toJson($scope.products));

			$scope.currentPage = 1;
			$scope.maxSize = 100;
			$scope.totalItems = $scope.products.length;
			$scope.itemsPerPage = 10;

			console.log("totalItems " + $scope.totalItems);

			$scope.$watch('search', function (newVal, oldVal) {
				$scope.filteredProducts = filterFilter($scope.products, newVal);
				$scope.totalItems = $scope.filteredProducts.length;
			}, true);
		}]);
})();