app.controller('AppMenuCtrl', ['$scope', '$ionicSideMenuDelegate', '$state',
  function ($scope, $ionicSideMenuDelegate, $state) {
    $scope.gotoHome = function () {
      $state.go('app.home');
    }
    $scope.gotoSellkit = function () {
      $state.go('app.Sellkit');
    }
    $scope.gotoSoldkit = function () {
      $state.go('app.Soldkit');
    }
    $scope.gotoAccount = function () {
      $state.go('app.Account');
    }
  }])