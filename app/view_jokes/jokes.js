'use strict';

angular.module('myApp.jokes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('jokes', {
    url: '/jokes',
    data: {
        permissions: {
          except: ['anonymous'],
          redirectTo: 'auth'
        }
      },
    views: {
      'jokesContent': {
        templateUrl: "view_jokes/jokes.html",
    	controller: 'JokesCtrl as jokes'
      }
    }
  })
}])

.controller('JokesCtrl', ['$http', '$auth', '$rootScope','$state', '$q' , function($http, $auth, $rootScope, $state, $q) {

  var jk = this;
        
        jk.jokes;
        jk.error;          

        $http.get('http://localhost:8000/api/v1/jokes').success(function(jokes){    
          console.log(jokes);
          jk.jokes = jokes.data;
          }).error(function(error){
            jk.error = error;
          })         

        // console.log($rootScope.currentUser);

  jk.logout = function() {

            $auth.logout().then(function() {

                // Remove the authenticated user from local storage
                localStorage.removeItem('user');

                // Remove the current user info from rootscope
                $rootScope.currentUser = null;
                $state.go('auth');
            });
        }

}]);