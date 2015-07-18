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
    	.controller('CreateProductModalInstanceCtrl', ['$scope', '$modalInstance', 'product', 'productsService', function ($scope, $modalInstance, product, productsService) {
                
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

                productsService.save({},product, function() {
                    $scope.products = productsService.query();
                    //$scope.products.unshift(product);
                    $modalInstance.close();

                });
            };
        }]);
})();