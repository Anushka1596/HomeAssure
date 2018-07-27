// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('HomeAssure', ['ionic', 'ui.router'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Stuff in here
    });
  })
  .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',
    function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
      $ionicConfigProvider.tabs.position('bottom');
      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'templates/app.html',
          controller: 'AppMenuCtrl'
        })
        .state('login', {
          cache: false,
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        })
        //Home 
        .state('app.home', {
          url: '/home',
          templateUrl: 'Home/home.html',
          controller: 'HomeCtrl'
        })

        //Sell Kit
        .state('app.Sellkit', {
          url: '/sellkit',
          templateUrl: 'Sellkit/Sellkit.html',
          controller: 'SellkitCtrl'
        })
        .state('app.Sellkit.AddCustomer', {
          url: '/addCustomer',
          templateUrl: 'Sellkit/AddCustomer/AddCustomer.html',
          controller: 'AddCustomerCtrl'
        })

        .state('app.Sellkit.AddProduct', {
          url: '/addProduct',
          templateUrl: 'Sellkit/AddProduct/AddProduct.html',
          controller: 'AddProductCtrl'
        })
        .state('app.Sellkit.AddProductDetails', {
          url: '/addProductDetails',
          templateUrl: 'Sellkit/AddProductDetails/AddProductDetails.html',
          controller: 'AddProductDetailsCtrl'
        })
        .state('app.Sellkit.kitDetail', {
          url: '/kitDetail',
          templateUrl: 'Sellkit/KitDetail/KitDetail.html',
          controller: 'KitDetailCtrl'
        })

        .state('app.Sellkit.payments', {
          url: '/payments',
          templateUrl: 'Sellkit/Payment/Payment.html',
          controller: 'PaymentCtrl'
        })

        //Sold kit
        .state('app.SoldkitList', {
          url: '/soldkitList',
          templateUrl: 'Soldkit/SoldProductList/SoldProductList.html',
          controller: 'SoldProductListCtrl'
        })

        .state('app.SoldkitProductDetails', {
          url: '/soldkitDetails',
          templateUrl: 'Soldkit/SoldProductDetails/SoldProductDetails.html',
          controller: 'SoldProductDetailsCtrl'
        })
        //Account
        .state('app.Account', {
          url: '/account',
          templateUrl: 'Account/Account.html',
          controller: 'AccountCtrl'
        })
        //404 Error
        .state('404', {
          url: '/404',
          templateUrl: '404.html',
        })
    }
  ])

