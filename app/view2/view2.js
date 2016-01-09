'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('view2', {
    url: '/view2',

    views: {
      'jokesContent': {
        templateUrl: "view2/view2.html",
    	controller: 'View2Ctrl'
      }
    }
    
  })
}])

.controller('View2Ctrl', ['$http', function($http) {

}]);