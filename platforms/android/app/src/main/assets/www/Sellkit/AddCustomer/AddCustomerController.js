app.controller('AddCustomerCtrl', ['$scope', '$state',
  function ($scope, $state) {
    $scope.Save = function () {
      $state.go('app.Sellkit.AddProduct');
    }

  }])