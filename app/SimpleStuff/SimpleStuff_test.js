'use strict';

describe('myApp.SimpleStuff module', function() {

  beforeEach(module('myApp.SimpleStuff'));

  describe('SimpleController controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var simpleCtrl = $controller('SimpleController');
      expect(simpleCtrl).toBeDefined();
    }));

  });
});