(function() {
    'use strict';

	/**
	 * @ngdoc service
	 * @name gemStoreApp.userService
	 * @description
	 * # userService
	 */

	angular.module('gemStoreApp.usersService',[])
	    .factory('usersService', function(Restangular) {
            return Restangular.service('users');
        });
})();