'use strict';

/**
 * @ngdoc directive
 * @name gemStoreApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('gemStoreApp')
	.directive("productReviews", function() {
		return {
			restrict: 'E',
			templateUrl: 'scripts/directives/product-review/product-review.html'
		};
	})