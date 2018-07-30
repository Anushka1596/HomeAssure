app.controller('AddProductCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {

    var customer = $stateParams.customer;
    var newProduct = $stateParams.productDetails;

    //$scope.Products = newProduct;

    $scope.Products = [
      {
        "prod_category": "TV",
        "prod_BrandName": "Sony",
        "prod_SerialNo": "azsexdrcfvgbh",
        "prod_PurchaseDate": "cftvghbj"
      },
      {
        "prod_category": "TV",
        "prod_BrandName": "Sony",
        "prod_SerialNo": "fcgvhb",
        "prod_PurchaseDate": "gvhbjn"
      },
      {
        "prod_category": "TV",
        "prod_BrandName": "Sony",
        "prod_SerialNo": "gvhbj",
        "prod_PurchaseDate": "dcfgvhb"
      },
    ];
    if ($stateParams.productDetails != null || $stateParams.productDetails != undefined) {
      $scope.Products.push(newProduct);
    }

    //console.log($scope.Products);

    $scope.addProduct = function () {
      $state.go('app.Sellkit.AddProductDetails');
    }
    $scope.gotokit = function () {
      $state.go('app.Sellkit.kitDetail', { customer: customer, productList: $scope.Products, productDetails: null, Kitdetail: null, payment: null });
    }
    $scope.backtoCustomer = function () {
      $state.go('app.Sellkit.AddCustomer', { customer: customer, productList: $scope.Products, productDetails: null, Kitdetail: null, payment: null });
    }
  }])