(function() {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name gemStoreApp.directive:paginationCount
	 * @description
	 * # paginationCount
	 */
	 angular.module('gemStoreApp')
		.directive('paginationCount', function() {
				return {
					restrict: 'E',
					templateUrl: 'scripts/directives/product-pagination/pagination-count.html',
					controller: 'ProductsPaginationCtrl'
				};
		})

		.filter('startFrom', function () {
			return function (input, start) {
				if (input) {
					start = +start;
					return input.slice(start);
				}
				return [];
			};
		}); 
})();