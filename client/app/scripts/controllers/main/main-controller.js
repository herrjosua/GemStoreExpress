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
                backdrop: true,
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
                $scope.user = '';
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }])

    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, user, $http) {
        $scope.user = user;

        $scope.ok = function () {
         $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.submit = function () {
            console.log('I wanna submit this form!!');

            if (!user.firstName || !user.lastName || !user.email || !user.pwd || !user.confirmPwd) {
                console.log('Please fill out all form fields.');
                return false;
            }

            // make sure the passwords match match
            if (user.pwd !== user.confirmPwd) {
                //alert('Your passwords must match.');
                console.log('Your passwords must match.');
                return false;
            }

            console.log(user);

            // Make the request to the server ... which doesn't exist just yet
            var request = $http.post('/users', user);

            request.success(function (data) {
                console.log(data);
                $scope.user = '';
                $modalInstance.close();
            });

            request.error(function (data) {
                console.log(data);
            });

           
        };




    });