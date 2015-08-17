(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.filter:searchProducts
	 * @description
	 * # searchProducts
	 * Filter of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.filter('searchProducts', function() {
			return function (items) {
				var filtered = [];

				angular.forEach(items, function(item){
					filtered.push(item);
				});

				return filtered;
			};
		});
})();