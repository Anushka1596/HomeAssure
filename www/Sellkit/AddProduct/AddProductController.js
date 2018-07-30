app.controller('AddProductCtrl', ['$scope', '$state', '$stateParams', '$rootScope',
  function ($scope, $state, $stateParams, $rootScope) {
    $scope.Products = $rootScope.Products;
    var customer = $stateParams.customer;
    var newProduct = $stateParams.productDetails;
    console.log(newProduct);
    //var productList = $stateParams.productList;
    //console.log($stateParams.productList);

    /*if (productList != null || productList != undefined) {
      $$rootScope.Products = productList;
    }*/

    if (newProduct != null || newProduct != undefined) {
      $rootScope.Products.push(newProduct);
      $scope.Products = $rootScope.Products;
      console.log($rootScope.Products);
    }
    $rootScope.Products = [
      /*{
        "prod_category": "TV",
        "prod_InvoiceAvailable": "null",
        "prod_BrandName": "SONY",
        "prod_BrandOthers": "null",
        "prod_BrandText": "hello",
        "prod_ModelName": "",
        "prod_ModelOthers": "",
        "prod_ModelText": "",
        "prod_PurchaseDate": "7/9/2000",
        "prod_SerialNo": "45678 ",
        "prod_price": ""
      },*/

    ];
    $scope.reset = function () {
      $scope.Products = [];
    }
    $scope.addProduct = function () {
      //console.log($scope.Products);
      $state.go('app.Sellkit.AddProductDetails', { customer: customer, productList: $rootScope.Products, productDetails: null, Kitdetail: null, payment: null });
    }
    $scope.gotokit = function () {
      $state.go('app.Sellkit.kitDetail', { customer: customer, productList: null, productDetails: null, Kitdetail: null, payment: null });
    }
    $scope.backtoCustomer = function () {
      $state.go('app.Sellkit.AddCustomer', { customer: customer, productList: null, productDetails: null, Kitdetail: null, payment: null });
    }
  }])