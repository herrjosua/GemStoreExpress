(function() {
    'use strict';

    /**
    * @ngdoc function
    * @name gemStoreApp.controller:CreateProductModalInstanceCtrl
    * @description
    * # CreateProductModalInstanceCtrl
    * Controller of the gemStoreApp
    */

    angular.module('gemStoreApp')
    	.controller('CreateProductModalInstanceCtrl', ['$scope', '$modalInstance', 'product', 'productsService', 'Restangular', function ($scope, $modalInstance, product, productsService, Restangular) {
                
            $scope.product = product;

            $scope.ok = function () {
                $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.submit = function () {
                if (!product.name || !product.description || !product.shine || !product.price || !product.rarity || !product.color || !product.faces) {
                    console.log('Please fill out all form fields.');
                    return false;
                }

                var resource = Restangular.all('/products');
                resource.post(product).then(function(newResource){
                    //$scope.products.unshift(product);
                    //productsService.push(newResource);
                    $modalInstance.close();
                });
            };
        }]);
})();