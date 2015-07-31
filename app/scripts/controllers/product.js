'use strict';

/**
 * @ngdoc function
 * @name stratocacheApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the stratocacheApp
 */
angular.module('stratocacheApp')
  .controller('ProductCtrl', ['$scope', 'ProductList',  function($scope, ProductList) {
    $scope.bodyClass = 'product';
   $scope.products = [];
    
   $scope.setMaster = function(section) {
			$scope.selected = section;
		};

		$scope.isSelected = function(section) {
			return $scope.selected === section;
		};

    
    ProductList.query().$promise.then(function(data) {
			$scope.products = data[0].products;
			
		});


  }]);
