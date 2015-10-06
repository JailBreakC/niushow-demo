var app = angular.module("app", []);

app.controller("indexCtrl", function ($scope, $http) {
    $scope.message = "Hello, Angular JS.";
    console.log($scope.message);
});