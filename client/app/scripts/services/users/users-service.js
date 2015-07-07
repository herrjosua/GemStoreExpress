angular.module('gemStoreApp.usersService',['ngResource'])

    .factory('usersService', function($resource) {
        var Project = $resource('mongodb://localhost/test');

        Project.prototype.update = function(cb) {
            return Project.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
        };

        Project.prototype.destroy = function(cb) {
            return Project.remove({id: this._id.$oid}, cb);
        };

        return Project;
    });