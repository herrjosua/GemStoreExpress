(function() {
    'use strict';

    /**
        * @ngdoc function
        * @name gemStoreApp.controller:CreateUserModalInstanceCtrl
        * @description
        * # CreateUserModalInstanceCtrl
        * Controller of the gemStoreApp
    */

    angular.module('gemStoreApp')
    	.controller('CreateUserModalInstanceCtrl', ['$scope', '$modalInstance', 'user', '$http', function ($scope, $modalInstance, user, $http) {
            $scope.user = user;

            $scope.ok = function () {
             $modalInstance.close();
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.submit = function () {
                if (!user.firstName || !user.lastName || !user.email || !user.pwd || !user.confirmPwd) {
                    console.log('Please fill out all form fields.');
                    return false;
                }

                // make sure the passwords match match
                if (user.pwd !== user.confirmPwd) {
                    console.log('Your passwords must match.');
                    return false;
                }

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
        }]);
})();