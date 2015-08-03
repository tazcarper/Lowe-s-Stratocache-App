'use strict';

/**
 * @ngdoc overview
 * @name stratocacheApp
 * @description
 * # stratocacheApp
 *
 * Main module of the application.
 */
 angular
  .module('stratocacheApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'getCanDoListService',
    'hotspot',
    'productService'
  ])
    .controller('global', ['$scope', '$location', '$rootScope',function($scope, $location, $rootScope) {
      $scope.bodyClass='';
      $scope.setTime = function(){
       $rootScope.lastDigestRun = Date.now();
       console.log($rootScope.lastDigestRun);
      };

     
    //  console.log($scope.bodyClass);
    $rootScope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
    };


    }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/cando', {
        templateUrl: 'views/cando.html',
        controller: 'CandoCtrl',
        controllerAs: 'cando'
      })
       .when('/getstarted',{
        templateUrl: 'views/getStarted.html',
        controller: 'startedCtrl',
        controllerAs: 'started'
      })
        .when('/faq',{
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
        .when('/productCat',{
        templateUrl: 'views/productCat.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
        .when('/servicePlans',{
        templateUrl: 'views/servicePlans.html',
        controller: 'ServicePlansCtrl',
        controllerAs: 'servicePlans'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.run(function($rootScope, $location, $interval) {

    $rootScope.lastDigestRun = Date.now();
   $interval(function() {
      console.log('check idle');
        var now = Date.now();            
        if (now - $rootScope.lastDigestRun > 3*60*1000 && $location.path() !== '/') {
           console.log('go home');
          // $location.path('/');
        }
    }, 60*1000);

    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.lastDigestRun = Date.now();  
    });
  
});