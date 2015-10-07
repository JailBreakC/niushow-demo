var app = angular.module('app');

app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = 'Hello, Angular JS.';
    console.log($scope.message);
}]);

app.controller('detailCtrl', ['$scope', '$http', function ($scope, $http) {
}]);

app.controller('listCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.pictures = [
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ];
    $scope.test = 'xxxxxx';
    console.log($scope.pictures);
}]);