angular.module('Creative4', ['ngMaterial'])
  .controller('MainCtrl', [
    '$scope', '$http',
    function ($scope, $http) {
      $scope.message = 'This is our main page';
    }
  ]);
