'use strict';

describe('myApp.jokes module', function() {

  beforeEach(module('myApp.jokes'));

  describe('jokes controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('JokesCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});