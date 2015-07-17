(function() {
    'use strict';

	/**
	 * @ngdoc directive
	 * @name gemStoreApp.directive:navbar
	 * @description
	 * # navbar
	 */
	angular.module('gemStoreApp')
		.directive('navbar', function () {
			return {
				templateUrl: 'scripts/directives/navbar/navbar.html',
				restrict: 'E'
			};
		});
})();