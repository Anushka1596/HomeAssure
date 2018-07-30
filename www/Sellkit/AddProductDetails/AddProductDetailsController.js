app.controller('AddProductDetailsCtrl', ['$scope', '$state', '$stateParams', '$rootScope',
  function ($scope, $state, $stateParams, $rootScope) {
    $scope.product = {};
    //$scope.productList = [];
    var customer = $stateParams.customer;
    $scope.productList = $stateParams.productList;


    $scope.backToList = function () {
      $state.go('app.Sellkit.AddProduct', { customer: customer, productList: $scope.productList, productDetails: $scope.product, Kitdetail: null, payment: null });
    };
    var newProduct = {};
    $scope.reset = function () {
      newProduct = {};
    };
    $scope.productAdded = function () {
      newProduct = {};
      newProduct.prod_category = $scope.product.category;
      newProduct.prod_InvoiceAvailable;
      newProduct.prod_BrandName = $scope.product.brandName;
      newProduct.prod_BrandOthers = $scope.product.brandOthers;
      newProduct.prod_BrandText = $scope.product.brandText;
      newProduct.prod_ModelName = $scope.product.modelName;
      newProduct.prod_ModelOthers = $scope.product.modelOthers;
      newProduct.prod_ModelText = $scope.product.modelText;
      newProduct.prod_PurchaseDate = $scope.product.purchaseDate;
      newProduct.prod_SerialNo = $scope.product.serialno;
      newProduct.prod_price = $scope.product.price;
      //$scope.product = newProduct;
      console.log(newProduct);


      $state.go('app.Sellkit.AddProduct', { customer: customer, productList: $scope.productList, productDetails: newProduct, Kitdetail: null, payment: null });
    }
  }]);