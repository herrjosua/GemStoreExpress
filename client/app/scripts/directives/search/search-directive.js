(function() {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name gemStoreApp.directive:search
	 * @description
	 * # search
	 */
	 angular.module('gemStoreApp')
	 	.directive("search", function() {
			return {
				restrict: 'E',
				templateUrl: 'scripts/directives/search/search.html',
				controller: 'SearchCtrl'
			};


		});
		
})();