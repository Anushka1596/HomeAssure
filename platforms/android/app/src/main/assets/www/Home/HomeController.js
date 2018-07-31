app.controller('HomeCtrl', ['$scope','$state','ionicDatePicker',function ($scope,$state,ionicDatePicker) {
  $scope.message = "Hello world";
  $scope.fixedSettings = {
    theme: 'material-dark',
    layout: 'fixed',
    itemWidth: 80
  };
  $scope.openfilter =function(){
    $state.go('app.Filter');
  }
  var ipObj1 = {
    callback: function (val) {  
      console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      $scope.fromDate = new Date(val);
    }
  };
  $scope.openDatePicker1 = function(){
    ionicDatePicker.openDatePicker(ipObj1);
    console.log(ipObj1);
  };
  var ipObj2 = {
    callback: function (val) {  
    //    console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      $scope.toDate = new Date(val);
    }
  };
  $scope.openDatePicker2 = function(){
    ionicDatePicker.openDatePicker(ipObj2);
  };

  $scope.backtosold = function (){
    $state.go('app.home');
  };
  
  $scope.reset = function (){
    $scope.fromDate = null;
    $scope.toDate = null;
  };
}]);