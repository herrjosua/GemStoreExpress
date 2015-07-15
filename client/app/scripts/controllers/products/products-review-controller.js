'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp')
	.controller("ReviewCtrl", ['$scope', '$resource', 'productsService', function ($scope, $resource, productsService) {
		this.review = {};

		// Method for adding a review
		this.addReview = function(product){

			console.log('Product: ' + angular.toJson(product));

			console.log('posting a review to the front end!!');
			this.review.createdOn = Date.now();

			console.log('Product review: ' + angular.toJson(this.review));

			product.reviews.push(this.review);

			console.log('Product plus review: ' + angular.toJson(product));

			//product.reviews.$save();

			//this.review.$save();

			//var Product = $resource('/products/:productId', {productId: product_.id});
			//var product = Product.get({productId: product._id}, function () {
				//product.$save(this.review);
			//})

			//productsService.save({id: product._id}, function() {
				//product.$save();
				//this.review.splice(product, 1);
			//});

			this.review = {};
		};
	}]);