app.controller('HomeCtrl', ['$scope','ionicDatePicker',function ($scope,ionicDatePicker) {
  $scope.message = "Hello world";
  $scope.fixedSettings = {
    theme: 'material-dark',
    layout: 'fixed',
    itemWidth: 80
  };
  var ipObj1 = {
    callback: function (val) {  
      console.log('Return value from the datepicker popup is : ' + val, new Date(val));
    }
  };
  $scope.openDatePicker = function(){
    ionicDatePicker.openDatePicker(ipObj1);
  };
}]);