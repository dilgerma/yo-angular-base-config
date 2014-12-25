'use strict';

/**
 * @ngdoc function
 * @name ticApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticApp
 */
angular.module('ticApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
