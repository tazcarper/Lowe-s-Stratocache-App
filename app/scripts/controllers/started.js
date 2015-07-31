'use strict';

/**
 * @ngdoc function
 * @name stratocacheApp.controller:startedCtrl
 * @description
 * # startedCtrl
 * Controller of the stratocacheApp
 */
angular.module('stratocacheApp')
  .controller('startedCtrl', ['$scope',  function ($scope) {
    $scope.bodyClass = 'started';
    $scope.about = true;
    //$('header ul').find('[data-page="'+$scope.bodyClass+'"').addClass('selected');

    // $scope.isActive('/about');
  }]);
