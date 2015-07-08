'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp')
	.controller('UsersCtrl', ['$scope', '$http', 'users', function ($scope, $http, users) {
		// $scope.users = [
		// 	{
		// 		'firstname': 'Joshua',
		// 		'lastname': 'Bock',
		// 		'email': 'jbock@domain.com'
		// 	}
		// ];

		//$scope.users = o.getAll();

		$scope.user = {};

		$scope.user = users.getAll();

		//console.log($scope.users);

	}])

	.factory('users', ['$http', function($http){
		var o = {
			users: []
		};

		// Function getAll is used to retrieve all users in the users service
		o.getAll = function() {
			return $http.get('/users').success(function(data) {
				angular.copy(data, o.users);

				//console.log(data);

				//console.log(o.users);
			});
		};

		return o;
	}]);