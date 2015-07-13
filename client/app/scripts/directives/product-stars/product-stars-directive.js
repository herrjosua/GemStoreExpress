'use strict';

/**
 * @ngdoc directive
 * @name gemStoreApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('gemStoreApp')
	.directive("productStars", ['productsService', function(productsService) {
		return {
			restrict: 'EA',
			templateUrl: 'scripts/directives/product-stars/product-stars.html',
			scope: {
				ratingValue: "=ngModel",
				max: "=",
				readonly: "@",
				onRatingSelected: '&'
			},
			
			link : function(scope, elem, attrs) {
				function updateStars() {
					scope.stars = [];
					for (var i = 0; i < scope.max; i++) {
						scope.stars.push({filled : i < scope.ratingValue});
					}
				};
			
				scope.toggle = function(index) {
					if (scope.readonly == undefined || scope.readonly == false){
						scope.ratingValue = index + 1;
						scope.onRatingSelected({
							rating: index + 1
						});
					}
				};
				
				scope.$watch("ratingValue", function(oldVal, newVal) {
					updateStars();
				});
			}
		}
	}]);