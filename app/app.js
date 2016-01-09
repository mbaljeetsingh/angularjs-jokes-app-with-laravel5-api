'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
  'ui.router',
  'myApp.jokes',
  'myApp.view2',
  'myApp.auth',
  'myApp.version',
   'satellizer',
   'permission'
])
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

.run(function (Permission, $rootScope, $state, $auth) {

      $rootScope.logout = function() {

      $auth.logout().then(function() {

          // Remove the authenticated user from local storage
          localStorage.removeItem('user');

          // Remove the current user info from rootscope
          $rootScope.currentUser = null;
          $state.go('auth');
      });
      }

      $rootScope.currentUser = JSON.parse(localStorage.getItem('user'));
      // Define anonymous role
      Permission
      .defineRole('anonymous', function (stateParams) {
        // If the returned value is *truthy* then the user has the role, otherwise they don't
        // var User = JSON.parse(localStorage.getItem('user')); 
        // console.log("anonymous ", $auth.isAuthenticated()); 
        if (!$auth.isAuthenticated()) {
          return true; // Is anonymous
        }
        return false;
      })

      .defineRole('isloggedin', function (stateParams) {
        // If the returned value is *truthy* then the user has the role, otherwise they don't
        // console.log("isloggedin ", $auth.isAuthenticated()); 
        if ($auth.isAuthenticated()) {
          return true; // Is loggedin
        }
        return false;
      })
      ;
    })


.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {

	$authProvider.loginUrl = 'http://localhost:8000/api/authenticate';
  // $urlRouterProvider.otherwise('/view1');
  $urlRouterProvider.otherwise('/auth');
}]);
