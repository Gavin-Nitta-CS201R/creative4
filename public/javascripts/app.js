angular.module('Creative4', ['ngMaterial'])
  .controller('MainCtrl', [
    '$scope', '$http', '$timeout',
    function ($scope, $http, $timeout) {

      $timeout(function () {
        $scope.showHint = true;
      }, 5000);

      $scope.getImages = function () {
        $http.get(`/images?text=${$scope.winner}`).then(resp => {
          console.log(resp.data.images);
        });
        $http.get(`/images?text=${$scope.loser}`).then(resp => {
          console.log(resp.data.images);
        });
      };
    }
  ]);
