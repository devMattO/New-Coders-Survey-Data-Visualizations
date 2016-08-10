var counterApp = angular.module('dataApp', []);
counterApp.controller('dataController', ['$scope', function($scope) {
        $scope.count = 0;
        $scope.clickToLoad = function() {
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", reqListener);
          oReq.open("GET", "http://localhost:4000/api/stuff");
          oReq.send();
        };
    }]);
function reqListener (e) {
  console.log(e)
}