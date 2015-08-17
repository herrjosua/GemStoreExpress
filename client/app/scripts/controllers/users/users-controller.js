(function() {
    'use strict';

	/**
	 * @ngdoc function
	 * @name gemStoreApp.controller:UsersCtrl
	 * @description
	 * # UsersCtrl
	 * Controller of the gemStoreApp
	 */
	angular.module('gemStoreApp')
		.controller('UsersCtrl', ['$scope', 'usersService', 'Restangular', function ($scope, usersService, Restangular) {
			$scope.users = {};

			Restangular.all('/users').getList().then(function(users) {
				$scope.users = users;
			});

			$scope.users = Restangular.all('/users').getList.$object;

			$scope.remove = function(id) {
				Restangular.one('/users', id).get().then(function(user) {
					Restangular.one('/users', id).remove().then(function() {
						var index = $scope.users.indexOf(user);
						$scope.users.splice(index, 1);
					});

				});
			};
		}]);
})();