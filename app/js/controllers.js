'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', function($scope, SubjectService) {
    SubjectService.get()
    .then(
      function(result) {
        $scope.subject = result.data.payload;
      },
      function(result) {
        alert('That did not go well!');
      }
    );
  })
  .controller('MyCtrl2', function($scope) {

  });
