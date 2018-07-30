app.controller('AddProductDetailsCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.product = {};
    var customer = $stateParams.customer;
    $scope.backToList = function () {
      $state.go('app.Sellkit.AddProduct');
    };
    $scope.Cancel = function () {
      var newProduct = {};
    };
    $scope.productAdded = function () {
      var newProduct = {};

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
      //console.log(newProduct);
      $state.go('app.Sellkit.AddProduct', { customer: customer, productList: null, productDetails: newProduct, Kitdetail: null, payment: null });
    }
  }]);