'use strict';

/**
 * @ngdoc function
 * @name stratocacheApp.controller:FaqCtrl
 * @description
 * # FaqCtrl
 * Controller of the stratocacheApp
 */
angular.module('stratocacheApp')
  .controller('FaqCtrl', ['$scope',  function ($scope) {
    $scope.bodyClass = 'faq';
  	$scope.podPosition = 0;
  	$scope.downInactive = false;
  	$scope.upInactive = true;
  	var podMax = -1460;
  

    $scope.downClick = function(){


    	if ($scope.podPosition === 0){
    		$scope.upInactive = false;
    	}

    	if ($scope.podPosition > podMax){
    		$scope.podPosition -= 365;
    		$scope.upIntactive = false;
    		$scope.pod += 1;
    		if ($scope.podPosition === -1460){
    			$scope.downInactive = true;
    		}
    	}
    	
    };

    $scope.upClick = function(){
    	if ($scope.podPosition === podMax){
    		$scope.downInactive = false;
    		$scope.upInactive = false;
    	}
    	if ($scope.podPosition < 0){
    		$scope.podPosition += 365;
    		$scope.upInactive = false;
    		$scope.pod -= 1;
    	}
    	if ($scope.podPosition === 0){
    			$scope.upInactive = true;
    		}
    	
    };

    //$('header ul').find('[data-page="'+$scope.bodyClass+'"').addClass('selected');

    // $scope.isActive('/about');
  }]);
