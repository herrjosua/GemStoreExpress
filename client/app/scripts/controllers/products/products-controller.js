(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:productsCtrl
	 * @description
	 * # productsCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('productsCtrl', ['$scope', 'productsService', function ($scope, productsService) {
			$scope.products = {};
			$scope.products = productsService.getList().$object;

			$scope.dateString = 'createdOn';
			$scope.orderProp = new Date($scope.dateString);
		}]);
})();