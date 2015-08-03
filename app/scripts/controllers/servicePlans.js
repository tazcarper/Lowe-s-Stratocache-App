'use strict';

/**
 * @ngdoc function
 * @name stratocacheApp.controller:ServicePlansCtrl
 * @description
 * # ServicePlansCtrl
 * Controller of the stratocacheApp
 */
angular.module('stratocacheApp')
  .controller('ServicePlansCtrl', ['$scope',  function ($scope) {
    $scope.bodyClass = 'servicePlans';
    $scope.about = true;
    //$('header ul').find('[data-page="'+$scope.bodyClass+'"').addClass('selected');

    // $scope.isActive('/about');
  }]);
