'use strict';

/**
    * @ngdoc function
    * @name gemStoreApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the gemStoreApp
*/

angular.module('gemStoreApp')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }])

    .controller('ModalCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
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
                templateUrl: '../../views/modal-signup.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    user: function () {
                        return $scope.user;
                    }
                }
            });

            modalInstance.result.then(function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }])

    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, user) {
        $scope.user = user;

        $scope.ok = function () {
         $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.submit = function () {
            console.log('I wanna submit this form!!');

            console.log('First name: ' + user.firstName);
            console.log('Last name: ' + user.lastName);
            console.log('Email: ' + user.email);
            console.log('Password: ' + user.pwd);
            console.log('Confirm Password: ' + user.confirmPwd);
        };




    });