(function() {
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
        }]);        
})();