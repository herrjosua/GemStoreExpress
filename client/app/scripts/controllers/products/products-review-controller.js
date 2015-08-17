(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:ReviewCtrl
	 * @description
	 * # ReviewCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('ReviewCtrl', ['$scope', '$resource', 'Restangular', 'productsService', function ($scope, $resource, Restangular, productsService) {
			this.review = {};

			// Method for adding a review
			this.addReview = function(product){

				this.review.createdOn = Date.now();
				var productReview = Restangular.all('/products/' + product._id + '/reviews');
				var updatedProduct = product;
				productReview.post(this.review).then(function(newResource){
					product.reviews.push(newResource);
				});
				this.review = {};
			};
		}]);
})();