app.controller('AddCustomerCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.customer = {};
    if ($stateParams.customer != null || $stateParams.customer != undefined) {
      $scope.customer = $stateParams.customer;
      console.log($scope.customer);
    }
    $scope.Save = function () {
      $state.go('app.Sellkit.AddProduct');
    }
    $scope.reset = function () {
      $scope.customer = {};
    }
    $scope.saveCustomer = function () {
      var customer = {};
      customer.cust_name = $scope.customer.cust_name;
      customer.cust_contact = $scope.customer.cust_contact;
      customer.cust_state = $scope.customer.cust_state;
      customer.cust_city = $scope.customer.cust_city;
      customer.cust_address = $scope.customer.cust_address;
      customer.cust_pin = $scope.customer.cust_pin;
      $scope.customer = customer;
      //console.log(customer);
      $state.go('app.Sellkit.AddProduct', { customer: $scope.customer, productList: null, productDetails: null, Kitdetail: null, payment: null });
    }

  }])