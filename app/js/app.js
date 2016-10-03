'use strict';

var MyApp = angular.module('MyStore', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'shopping_cart/store.htm',
        controller: MyController
      }).
      when('/shirts/:productPco', {
        templateUrl: 'shopping_cart/product.htm',
        controller: MyController
      }).
      when('/cart', {
        templateUrl: 'shopping_cart/shoppingCart.htm',
        controller: MyController
      }).
      when('/instr', {
        templateUrl: 'shopping_cart/instructions.htm',
        controller: MyController
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// create a data service that provides a store and a shopping cart
MyApp.factory("MyService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("MyStore");

    // enable PayPal checkout
    myCart.addCheckoutParameters("PayPal", "agrebst@gmail.com");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});