(function() {
    'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:ProductsPaginationCtrl
	 * @ProductsPaginationCtrl
	 * # productsCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('ProductsPaginationCtrl', ['$scope', '$log', 'productsService', 'filterFilter', function ($scope, $log, productsService, filterFilter) {

			$scope.search = {};

			console.log('quering the database for products length!');
			productsService.getList().then(function(products){
				$scope.totalItems = products.length;
			});

			$scope.filteredProducts = [];

			$scope.currentPage = 1;
			$scope.maxSize = 100;
			$scope.itemsPerPage = 10;
			$scope.noOfPages = Math.ceil($scope.products / $scope.itemsPerPage);

			$scope.pageFrom = 1;
			$scope.pageTo = $scope.itemsPerPage;

			var filterProducts = function(newVal){
				$scope.filteredProducts.splice(0, $scope.filteredProducts.length);
				angular.forEach($scope.products, function(product) {
					if(product.name == newVal){
						$scope.filteredProducts.push(product);
					}
				});
			}

			$scope.pageChanged = function() {
				if ($scope.currentPage === 1){
					$scope.pageFrom = 1;
					$scope.pageTo = $scope.itemsPerPage;
				}
				else {
					$scope.pageFrom = ($scope.currentPage * $scope.itemsPerPage) - ($scope.itemsPerPage - 1);
					$scope.pageTo = ($scope.currentPage * $scope.itemsPerPage);

					if ($scope.pageTo > $scope.products.length) {
						console.log('$scope.pageTo to greater than $scope.products.length - resetting to the length of $scope.products.length');
						$scope.pageTo = $scope.products.length;
					}
				}
			};

			$scope.$watch('search.name', function (newVal, oldVal) {
				$scope.filteredProducts = filterFilter($scope.products, newVal);
				$scope.totalItems = $scope.filteredProducts.length;
				$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
				$scope.currentPage = 1;
			}, true);
		}])

		.filter('startFrom', function () {
			return function (input, start) {
				if(input) {
					start = +start;
					return input.slice(start);
				}

				return [];
			};
		});
})();