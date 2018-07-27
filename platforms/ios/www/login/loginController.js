app.controller('LoginCtrl', ['$scope', '$timeout', '$ionicModal', '$ionicSideMenuDelegate', '$state',
  function ($scope, $timeout, $ionicModal, $ionicSideMenuDelegate, $state) {

    $scope.login = function () {
      $state.go('app.home')
    }
  }])