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

  $scope.values = [5000,2000,5000,2000,3000,6000];
  drawChart($scope.values,"#chart",11); // You can adjust the margin between each bar by changing 10 to whatever you like
  $scope.heightper = [];
  function drawChart(data,selector,padding){
  var max = Math.max.apply(Math, data);
	var chart = document.querySelector(selector);
	var barwidth = 35;
	var sum = data.reduce(function(pv, cv) { return pv + cv; }, 0);
	var left = 20;
	for (var i = 0; i< data.length;i++){
	  var newbar = document.createElement('div');
	  newbar.setAttribute("class", "bar");
	  newbar.style.width=barwidth+"px";
    newbar.style.height=((data[i]/max)*100)+"%";
    //$scope.heightper.push();
	  newbar.style.left=left+"px";
	  chart.appendChild(newbar);
	  left += (barwidth+padding+10);
  }
};
  
}]);