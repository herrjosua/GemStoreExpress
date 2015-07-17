(function() {
    'use strict';

    /**
        * @ngdoc function
        * @name gemStoreApp.controller:CreateUserModalCtrl
        * @description
        * # CreateUserModalCtrl
        * Controller of the gemStoreApp
    */

    angular.module('gemStoreApp')
    	.controller('CreateUserModalCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
            $scope.user = {
                firstName: '',
                lastname: '',
                email: '',
                pwd: '',
                confirmPwd: ''
            };

            $scope.animationsEnabled = true;

            $scope.open = function () {

                var modalInstance = $modal.open({
                    animation: $scope.animationsEnabled,
                    backdrop: true,
                    templateUrl: '../../views/modal-signup.html',
                    controller: 'CreateUserModalInstanceCtrl',
                    resolve: {
                        user: function () {
                            return $scope.user;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    $log.info('Modal dismissed at: ' + new Date());
                    $scope.user = '';
                });
            };

            $scope.toggleAnimation = function () {
                $scope.animationsEnabled = !$scope.animationsEnabled;
            };
    	}]);
})();