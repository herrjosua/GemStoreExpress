(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:SearchCtrl
	 * @description
	 * # SearchCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('SearchCtrl', ['$scope', function ($scope) {

			$scope.clearSearch = function(){
				$scope.search.name = '';
			};
	}]);
})();