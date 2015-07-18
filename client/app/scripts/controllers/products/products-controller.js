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

			$scope.addProduct = function () {
				// Creating a new product
				$scope.product = new productsService();

				$scope.product.name = 'Product 3';
				$scope.product.description = 'Product 3 description';
				$scope.product.shine = 8;
				$scope.product.price = 110.50;
				$scope.product.rarity = 7;
				$scope.product.color = 'sky blue';
				$scope.product.faces = 14;
				$scope.product.createdOn = Date.now();

				//Updates the front-end with the product
				$scope.products.unshift($scope.product);

				//Saves the new product to the back-end
				$scope.product.$save(function() {
					console.log("Saving using my service within my ProductsCtrl")
					//$state('products');
				});
			};

		}]);
})();