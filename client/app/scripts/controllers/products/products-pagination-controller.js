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

			//console.log("Do I have access to $scope.products? " + angular.toJson(productsService));

			//console.log(angular.isObject($scope.products));

			$scope.currentPage = 1;
			$scope.maxSize = 100;
			$scope.totalItems = $scope.products.length;
			$scope.itemsPerPage = 10;

			//console.log("Total Number of items " + $scope.products.length);
			//console.log("totalItems " + $scope.totalItems);

			// $watch is being called three times
			$scope.$watch('search', function (newVal, oldVal) {

				//console.log("newVal: " + angular.toJson(newVal));
				//console.log("oldVal: " + angular.toJson(oldVal));

				$scope.filteredProducts = filterFilter($scope.products, newVal);
				$scope.totalItems = $scope.filteredProducts.length;
			}, true);
		}]);
})();