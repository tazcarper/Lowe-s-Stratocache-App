'use strict';

/* Get Product List */

var app = angular.module('productService', ['ngResource']);



app.factory('ProductList', ['$resource',
  function($resource){
    return $resource('product.json', {}, {
      query: {method:'GET',params:{product:'products'},isArray:true}
    });
  }]);

