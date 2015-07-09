angular.module('gemStoreApp.usersService',['ngResource'])

    .factory('usersService', ['$resource', function($resource){
        return $resource('/users/:id', {},{});
    }]);