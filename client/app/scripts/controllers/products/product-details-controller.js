(function() {
    'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:ProductDetailCtrl
	 * @description
	 * # ProductDetailCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
	 	.controller('ProductDetailCtrl', ['$scope', '$state', '$stateParams', 'productsService', 'Restangular', function ($scope, $state, $stateParams, productsService, Restangular) {

			$scope.product = [];
			//ngResource Method
			//console.log('Query the database for product with the id of ' + $stateParams.id + '!');
			//$scope.product = productsService.get({id: $stateParams.id});

			var resource = Restangular.one('/products/' + $stateParams.id );
			console.log('Query the database for product with the id of ' + $stateParams.id + '!');
			resource.get().then(function(productsService){
				$scope.product = productsService;
			});

		}]);
})();