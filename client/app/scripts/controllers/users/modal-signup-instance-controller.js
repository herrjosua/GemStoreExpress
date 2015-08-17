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
    	.controller('CreateUserModalInstanceCtrl', ['$scope', '$modalInstance', 'user', 'usersService', 'Restangular', function ($scope, $modalInstance, user, usersService, Restangular) {
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


                var resource = Restangular.all('/users');
                resource.post(user).then(function(newResource){
                    console.log("Save successfull!!!");
                    $modalInstance.close();
                });            
            };
        }]);
})();