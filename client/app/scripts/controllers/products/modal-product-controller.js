(function() {
    'use strict';

    /**
        * @ngdoc function
        * @name gemStoreApp.controller:CreateProductModalCtrl
        * @description
        * # CreateProductModalCtrl
        * Controller of the gemStoreApp
    */

    angular.module('gemStoreApp')
    	.controller('CreateProductModalCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
            $scope.product = {
                name: '',
                description: '',
                shine: '',
                price: '',
                rarity: '',
                color: '',
                faces: '',
                createdOn: Date.now(),
            };

            $scope.animationsEnabled = true;

            $scope.open = function () {

                var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    backdrop: true,
                    templateUrl: '../../views/modal-product.html',
                    controller: 'CreateProductModalInstanceCtrl',
                    resolve: {
                        product: function () {
                            return $scope.product;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    $log.info('Modal dismissed at: ' + new Date());
                    $scope.product = '';
                });
            };

            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
    	}]);
})();