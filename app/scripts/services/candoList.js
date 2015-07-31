'use strict';

/* Get Can do List */

var app = angular.module('getCanDoListService', ['ngResource']);



app.factory('CanDoList', ['$resource',
  function($resource){
    return $resource('cando.json', {}, {
      query: {method:'GET',params:{hotspot:'hotspots'},isArray:true}
    });
  }]);

