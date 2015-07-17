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
	 	.controller('ProductDetailCtrl', ['$scope', '$state', '$stateParams', 'productsService', function ($scope, $state, $stateParams, productsService) {

			$scope.product = [];
			console.log('Query the database for product with the id of ' + $stateParams.id + '!');
			$scope.product = productsService.get({id: $stateParams.id});

		}]);
})();