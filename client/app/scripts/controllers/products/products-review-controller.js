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

				//console.log(product._id);

				//console.log('posting a review to the front end!!');
				this.review.createdOn = Date.now();

				//************
				//RESTANGULR METHOD

				// RestangularProvider.setRestangularFields({
				// 	id: "_id"
				// });

				var productReview = Restangular.all('/products/' + product._id + '/reviews');

				var updatedProduct = product;

				//console.log('updatedProduct: ' + angular.toJson(updatedProduct));
				//console.log('product: ' + angular.toJson(product));

				console.log('New review: ' + angular.toJson(this.review));

				//Pushing the review to the front-end
				//product.reviews.push(this.review);

				//console.log('What is product after adding a review to Front-end: ' + angular.toJson(product));

				//productsService.save('/products', product, function() {
				//productReview.post(product).then(function(newResource){
				//updatedProduct.post(productReview, product).then(function(newResource){)
				productReview.post(product).then(function(newResource){
					//productsService.update(productReview, product);
					console.log('product: ' + angular.toJson(product));
					console.log('What is newResource?' + angular.toJson(newResource));

					//product.reviews.push(newResource);
					//console.log('What is product after adding a review: ' + angular.toJson(product));
				});

				//************
				//NG Resource Method

				//var url = 'localhost:3000/products/'+ product._id + '/reviews';
				//var url = 'localhost:3000/products/55afbcf000318fed33038ae0/reviews';
				//var url = 'product';

				//localhost:3000/products/55afbcf000318fed33038ae0/reviews

				//console.log('What is url? ' + url);

				// console.log('New review: ' + angular.toJson(this.review));

				// $http.post('/products' + id + '/comments', comment)
				// productsService.save({id: product._id +'/reviews'},product, function() {
				// 	console.log('am I am getting here?')
				// 	console.log('Save successfull!!!');
				// });

				// productsService.save(product, function() {
				// 	console.log('Update the server?');
				// 	//product.$update();
				// 	productsService.$update(product);
				// });

				this.review = {};
			};
		}]);
})();