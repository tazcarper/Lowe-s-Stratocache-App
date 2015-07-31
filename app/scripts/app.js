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
      .otherwise({
        redirectTo: '/'
      });
  });
