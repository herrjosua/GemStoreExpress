'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp')
	.controller('UsersCtrl', ['$scope', '$http', 'usersService', function ($scope, $http, usersService) {
		$scope.users = {};

		// Gets all the users
		console.log('Query the database for users!');
		$scope.users = usersService.query();

		$scope.remove = function(id) {
			var user = $scope.users[id];

			console.log('I will remove the user ' + user.firstname + ' from the front end');

			usersService.remove({id: user._id}, function() {
				$scope.users.splice(user, 1);
			});
		};
	}]);