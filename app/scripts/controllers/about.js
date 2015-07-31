'use strict';

/**
 * @ngdoc function
 * @name stratocacheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stratocacheApp
 */
angular.module('stratocacheApp')
  .controller('AboutCtrl', ['$scope',  function ($scope) {
    $scope.bodyClass = 'about';
    $scope.about = true;
    //$('header ul').find('[data-page="'+$scope.bodyClass+'"').addClass('selected');

    // $scope.isActive('/about');
  }]);
