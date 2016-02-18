'use strict';

// Declare app level module which depends on views, and components
angular.module('IntranetApp', [
  'ui.router'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'Views/Homepage.html',
        controller: 'PageTabController'
      })
      .state('production', {
        url:'/Production',
        templateUrl: 'Views/Production.html',
        controller: 'PageTabController'
      })
      .state('manufacturing', {
        url:'/Manufacturing',
        templateUrl: 'Views/Manufacturing.html',
        controller: 'PageTabController'
      })

}]);

/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/phones', {
    templateUrl: 'index.html',
    controller: 'PageTabController'
  }).
  when('/phones/tab', {
    templateUrl: 'Views/PageTab.html',
    controller: 'PageTabController'
  }).
  otherwise({
    redirectTo: '/phones'
  });
}]);*/
