'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp')
	.controller("ReviewCtrl", function() {
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});