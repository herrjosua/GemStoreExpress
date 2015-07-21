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
		.controller("ReviewCtrl", ['$scope', '$resource', 'productsService', function ($scope, $resource, productsService) {
			this.review = {};

			// Method for adding a review
			this.addReview = function(product){

				var url = '/'+ product._id + '/reviews';

				console.log("What is url? " + url);

				console.log('posting a review to the front end!!');
				this.review.createdOn = Date.now();

				console.log("What is product: " + angular.toJson(product));

				product.reviews.push(this.review);

				console.log("What is product: " + angular.toJson(product));

				productsService.update('products/reviews', product, function() {
                    console.log("Save successfull!!!");
                    $modalInstance.close();
                });

				// productsService.save(product, function() {
				// 	console.log("Update the server?");
				// 	//product.$update();
				// 	productsService.$update(product);
				// });

				this.review = {};
			};
		}]);
})();