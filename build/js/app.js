var app = angular.module("app");

app.controller("mainCtrl", function ($scope, $http) {
    $scope.message = "Hello, Angular JS.";
    console.log($scope.message);
});