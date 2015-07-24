(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name gemStoreApp.productService
     * @description
     * # productService
     */

    //angular.module('gemStoreApp.productService',['ngResource','Restangular'])
    angular.module('gemStoreApp.productService',['ngResource'])

        //ngResource factory
        .factory('productsService', function($resource) {
            return $resource('/products/:id', {id:'@id'},{
                'update': { method: 'PUT'}
            });
        });

        //restAngular factory
        // .factory('productsService', function(Restangular) {
        //  return Restangular.service('products');
        // });
})();