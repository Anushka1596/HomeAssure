app.controller('KitDetailCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    var customer = $stateParams.customer;
    var productList = $stateParams.productList;
    $scope.customer = {};
    $scope.kitDetails = {};
    var productList = $stateParams.productList;
    if (customer != null || customer != undefined)
      $scope.customer.contact = customer.cust_contact;

    $scope.gotopayments = function () {
      var kitDetail = {};
      customer.cust_contact = $scope.customer.contact;
      kitDetail.OTP = $scope.kitDetails.OTP;
      kitDetail.activationCode = $scope.kitDetails.activationCode
      $scope.kitDetails = kitDetail;
      $state.go('app.Sellkit.payments', { customer: customer, productList: productList, productDetails: null, Kitdetail: $scope.kitDetails, payment: null });
    };
    $scope.backtoProduct = function () {
      $state.go('app.Sellkit.AddProduct', { customer: customer, productList: productList, productDetails: null, Kitdetail: $scope.kitDetails, payment: null });
    };
    $scope.reset = function () {
      $scope.kitDetails = {};
    }
  }]);