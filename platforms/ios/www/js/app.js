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
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

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
          templateUrl: '',
          controller: ''
        })
        //Sold kit
        .state('app.Soldkit', {
          url: '',
          templateUrl: '',
          controller: ''
        })
        //Account
        .state('app.Account', {
          url: '',
          templateUrl: '',
          controller: ''
        })
        //404 Error
        .state('404', {
          url: '/404',
          templateUrl: '404.html',
        })
    }
  ])

