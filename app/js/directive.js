var app = angular.module('app');

app.directive('contact', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      isOpen: '='
    },
    templateUrl: '/app/templet/directive/contact.html'
  };
});

app.directive('uploader', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/app/templet/directive/uploader.html',
    scope: {
      fuck: '='
    },
    controller: ['$scope', '$timeout', function($scope, $timeout) {
      $scope.uploadHander = function(ele) {
        var uploader = angular.element(document.getElementById('uploadHander'));
        debugger;
        uploader.triggerHandler('click');
      }
      $scope.startUpload = function() {
        if($scope.imgList.length == 0) return;
        $scope.uploading = true;
        $scope.imgList.forEach(function(ele) {
          //debugger;
          ele.progress = Math.floor(Math.random() * 20) + 20;
          $timeout(function() {
            ele.progress = Math.floor(Math.random() * 20) + 80;;
            $timeout(function() {
              ele.progress = 100;
            }, Math.floor(Math.random() * 1000))
          }, Math.floor(Math.random() * 500)+500)
        })
        $timeout(function() {
          $scope.imgList = [];
          $timeout(function() {
            $scope.isOpen = false;
            $scope.uploading = false;
          },200);
        }, 2000);
      }
    }],
    link: function(scope, element, attrs) {
      var uploader = angular.element(document.getElementById('uploadHander'));
      var form = document.getElementById('uploaderForm');
      scope.imgList = [];
      window.URL =  window.URL ? window.URL : window.webkitURL;
      uploader.on('change', function() {
        var that = this
        $rootScope.$apply(function() {
          console.log(that.files);
          var files = that.files
          for(var i = 0; i < files.length; i++) {
            if(files[i].type.slice(0,5) !== 'image') {
              return;
            }
            var imgEle = {};
            imgEle.progress = 0;
            imgEle.name = files[i].name;
            imgEle.size = (files[i].size/1024/1024).toFixed(2);
            imgEle.src  = window.URL.createObjectURL(files[i]);
            scope.imgList.push(imgEle);
          }
          console.log(scope.imgList);
        })
        form.reset();
      })
    }
  };
}]);