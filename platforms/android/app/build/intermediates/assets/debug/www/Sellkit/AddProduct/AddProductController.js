app.controller('AddProductCtrl', ['$scope', '$state',
  function ($scope, $state) {
    var products = {};
    $scope.Products = [
      {
        "ProductCategory": "TV",
        "Brand": "Sony",
        "SerialNo": "azsexdrcfvgbh",
        "PurchaseDate": "cftvghbj"
      },
      {
        "ProductCategory": "TV",
        "Brand": "Sony",
        "SerialNo": "fcgvhb",
        "PurchaseDate": "gvhbjn"
      },
      {
        "ProductCategory": "TV",
        "Brand": "Sony",
        "SerialNo": "gvhbj",
        "PurchaseDate": "dcfgvhb"
      },
    ];
    $scope.addProduct = function () {
      $state.go('app.Sellkit.AddProductDetails');
    }
  }])