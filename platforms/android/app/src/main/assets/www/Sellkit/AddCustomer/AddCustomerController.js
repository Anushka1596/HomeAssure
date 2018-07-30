app.controller('AddCustomerCtrl', ['$scope', '$state',
  function ($scope, $state) {
    $scope.customer = {};
    $scope.Save = function () {
      $state.go('app.Sellkit.AddProduct');
    }
    $scope.reset = function () {
      $scope.customer = {};
    }
    $scope.saveCustomer = function () {
      var customer = {};
      customer.cust_name = $scope.customer.name;
      customer.cust_contact = $scope.customer.contact;
      customer.cust_state = $scope.customer.state;
      customer.cust_city = $scope.customer.city;
      customer.cust_address = $scope.customer.address;
      customer.cust_pin = $scope.customer.pin;
      $scope.customer = customer;
      //console.log(customer);
      $state.go('app.Sellkit.AddProduct', { customer: customer, productList: null, productDetails: null, Kitdetail: null, payment: null });
    }

  }])