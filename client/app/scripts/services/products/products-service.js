(function() {
    'use strict';

	/**
	 * @ngdoc service
	 * @name gemStoreApp.productService
	 * @description
	 * # productService
	 */

	angular.module('gemStoreApp.productService',['ngResource'])

	    .factory('productsService', function($resource) {
	        return $resource('/products/:id', {id:'@id'},{
	        	'update': { method: 'PUT'}
	        });
	    });
})();