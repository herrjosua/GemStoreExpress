'use strict';

describe('Controller: productsCtrl', function () {

  // load the controller's module
  beforeEach(module('gemStoreApp'));

  var productsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    productsCtrl = $controller('productsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(productsCtrl.awesomeThings.length).toBe(3);
  });
});
