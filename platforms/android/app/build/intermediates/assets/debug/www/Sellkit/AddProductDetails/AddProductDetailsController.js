app.controller('AddProductDetailsCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.backToList = function () {
      $state.go('app.Sellkit.AddProduct');
    };
  }]);