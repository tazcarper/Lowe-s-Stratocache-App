'use strict';

(function(){
var app = angular.module('hotspot', []);



app.directive('hotspot', function(){

	function link(scope, element){
		console.log(scope);
		element.css(
			{
			'top':scope.hotspot.top + 'px',
			'left':scope.hotspot.left + 'px',  
			'position': 'absolute'
			});	
	}

	return {
		restrict:"E",
		templateUrl:"includes/hotspot.html",
		link:link
	};
});
})();

