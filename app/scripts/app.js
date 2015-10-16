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
  .controller('global', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    $scope.bodyClass = '';
    $scope.setTime = function() {
      $rootScope.lastDigestRun = Date.now();
    };
    $scope.isSpanish = false;

    $scope.currentLocation = '';
    $rootScope.isActive = function(viewLocation) {
      if ($location.path().substr($location.path().length - 2).toString() === '_s') {
        $scope.isSpanish = true;
      } else {
        $scope.isSpanish = false;
      }
      return viewLocation === $location.path();

    };

    $rootScope.sendHome = function() {
      $location.path('/');
    };



  }])
  .config(function($routeProvider) {
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
      .when('/getstarted', {
        templateUrl: 'views/getStarted.html',
        controller: 'startedCtrl',
        controllerAs: 'started'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/productCat', {
        templateUrl: 'views/productCat.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/servicePlans', {
        templateUrl: 'views/servicePlans.html',
        controller: 'ServicePlansCtrl',
        controllerAs: 'servicePlans'
      })
      .when('/main_s', {
        templateUrl: 'views/main_s.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cando_s', {
        templateUrl: 'views/cando_s.html',
        controller: 'CandoCtrl',
        controllerAs: 'cando'
      })
      .when('/faq_s', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'faq'
      })
      .when('/productCat_s', {
        templateUrl: 'views/productCat.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/servicePlans_s', {
        templateUrl: 'views/servicePlans.html',
        controller: 'ServicePlansCtrl',
        controllerAs: 'servicePlans'
      })
      .when('/getstarted_s', {
        templateUrl: 'views/getStarted.html',
        controller: 'startedCtrl',
        controllerAs: 'started'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, $interval) {

    $rootScope.goHome = function() {
      $location.path('/');
    };

    $rootScope.lastDigestRun = Date.now();
    $interval(function() {
      var now = Date.now();
      // 30 sec 
      if (now - $rootScope.lastDigestRun > 1.5 * 60 * 1000 && $location.path() !== '/') {
       $rootScope.goHome();
      }
    }, 9.9 * 1000);



    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.lastDigestRun = Date.now();

    });

  });