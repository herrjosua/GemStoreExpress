(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name gemStoreApp.productService
     * @description
     * # productService
     */

    angular.module('gemStoreApp.productService', [])
        .factory('productsService', function(Restangular) {
            return Restangular.service('products');
        });
})();