app.controller('KitDetailCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.gotopayments = function () {
      $state.go('app.Sellkit.payments');
    };
    $scope.backtoProduct = function () {
      $state.go('app.Sellkit.AddProduct');
    };
  }]);