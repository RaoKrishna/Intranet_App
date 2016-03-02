'use strict';

// Declare app level module which depends on views, and components
angular.module('IntranetApp', [
  'ui.router',
  'ngResource'
]).
config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'Views/Homepage.html'
      })
      .state('production', {
        url:'/Production/:activemodule',
        templateUrl: 'Views/ViewProducts.html'
      })
      .state('manufacturing', {
        url:'/Manufacturing',
        templateUrl: 'Views/Manufacturing.html'
      })
      .state('createproduct', {
          url:'/CreateProduct',
          templateUrl: 'Views/CreateEditProduct.html'
      })
      .state('viewproducts', {
          url:'/ViewProduct',
          templateUrl: 'Views/ViewProducts.html'
      })

    /*$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];*/

    /*$httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
*/
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
