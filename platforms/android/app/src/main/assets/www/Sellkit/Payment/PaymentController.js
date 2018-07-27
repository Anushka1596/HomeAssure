app.controller('PaymentCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.backtokit = function () {
      $state.go('app.Sellkit.kitDetail');
    };

  }]);