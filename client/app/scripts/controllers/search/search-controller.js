(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:searchCtrl
	 * @description
	 * # searchCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('searchCtrl', ['$scope', function ($scope) {
			$scope.clearSearch = function(){
				$scope.search.name = '';
			};
		}]);
})();