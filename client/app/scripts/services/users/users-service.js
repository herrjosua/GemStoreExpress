(function() {
    'use strict';

	/**
	 * @ngdoc service
	 * @name gemStoreApp.userService
	 * @description
	 * # userService
	 */

	angular.module('gemStoreApp.usersService',['ngResource'])

	    .factory('usersService', ['$resource', function($resource){
	        return $resource('/users/:id', {},{});
	    }]);
})();