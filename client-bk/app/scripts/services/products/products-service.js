angular.module('gemStoreApp.productService',['ngResource'])

    .factory('productsService', function($resource) {
        var Project = $resource('https://api.mongolab.com/api/1/databases' +
            '/gemstore/collections/products/:id',
            { apiKey: 'xsBGwWWLUfQGI0AbLhS4_IE310zsjHW5'}, {
                update: { method: 'PUT' }
            }
        );

        Project.prototype.update = function(cb) {
            return Project.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
        };

        Project.prototype.destroy = function(cb) {
            return Project.remove({id: this._id.$oid}, cb);
        };

        return Project;
    });