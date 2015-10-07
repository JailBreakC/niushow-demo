var app = angular.module('app', ['ui.router']);
app.config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('picture', {
      url: '/picture',
      templateUrl: '/app/templet/navigation.html',
      controller: 'mainCtrl'
    }).state('picture.detail', {
      url: '/detail',
      templateUrl: '/app/templet/picture-detail.html',
      controller: 'detailCtrl'
    }).state('picture.list', {
      url: '/list',
      templateUrl: '/app/templet/picture-list.html',
      controller: 'listCtrl'
    });
    $urlRouterProvider.otherwise('/picture/list');
  }
]);
