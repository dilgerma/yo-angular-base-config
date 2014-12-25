'use strict';

/**
 * @ngdoc overview
 * @name ticApp
 * @description
 * # ticApp
 *
 * Main module of the application.
 */
angular
  .module('ticApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
