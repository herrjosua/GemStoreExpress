(function() {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name gemStoreApp.directive:navbar
	 * @description
	 * # navbar
	 */
	angular.module('gemStoreApp')
		.directive('productGallery', function () {
			return{
				restrict: 'AE',
				templateUrl: 'scripts/directives/product-gallery/product-gallery.html',
				controller: function() {
					this.current = 0;

					this.setCurrent = function(newGallery) {
						this.current = newGallery || 0;
					};
				},
				controllerAs: 'gallery'
			};
		});
})();