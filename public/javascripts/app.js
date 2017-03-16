angular.module('Creative4', ['ngMaterial'])
  .controller('MainCtrl', [
    '$scope', '$http', '$timeout', '$mdDialog',
    function ($scope, $http, $timeout, $mdDialog) {

      $timeout(function () {
        $scope.showHint = true;
      }, 5000);

      $scope.getImages = function () {

        if ($scope.winner == null || $scope.loser == null) {
          return $mdDialog.show(
            $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Whoa, hold on there!')
              .textContent('Please fill in the winning and losing teams!')
              .ariaLabel('Alert Dialog')
              .ok('Okay!')
          );
        }

        $http.get(`/images?text=${$scope.winner} basketball`).then(resp => {
          $scope.winners = resp.data.images;
        });
        $http.get(`/images?text=${$scope.loser} basketball`).then(resp => {
          $scope.losers = resp.data.images;
        });
      };
    }
  ]);
