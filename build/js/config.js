var app = angular.module('app', ['ui.router']);
app.config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('picture', {
      url: '/picture',
      templateUrl: '/app/templet/navigation.html',
      controller: 'mainCtrl'
    }).state('picture.detail', {
      url: '/detail',
      templateUrl: '/app/templet/picture-detail.html'
    });
    $urlRouterProvider.otherwise('/picture');
  }
]);
