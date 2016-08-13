var app = angular.module('app', ['angularModalService']);

app.controller('Controller', function($scope, ModalService) {

    $scope.show = function() {
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };

});

app.controller('ModalController', function($scope, close) {
 $scope.close = function(result) {
  close(result, 500); // close, but give 500ms for bootstrap to animate
 };
});

function makeChart() {
  return (
    c3.generate({
        data: {
            columns: [
                ["some college credit, no degree", 2268],
                ["high school diploma or equivalent (GED)", 1356],
                ["bachelor's degree", 5644],
                ["master's degree (non-professional)", 1445],
                ["professional degree (MBA, MD, JD, etc.)", 692],
                ["trade, technical, or vocational training", 443],
                ["associate's degree", 649],
                ["some high school", 764],
                ["Ph.D.", 160],
                ["no high school (secondary school)", 258],
            ],
            type : 'pie',
            onclick:
              function () {chart.resize({height:700, width:700});},
            onmouseover: function (d, i) {  },
            onmouseout: function (d, i) {  }
        }
    }));
}


var counterApp = angular.module('counterApp', ['ui.router']);
counterApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('state1', {
          url:"/state1",
          templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
          url:"/list",
          templateUrl: "partials/state1.list.html",
          controller: function($scope) {
            makeChart();
            $scope.items = ['a', 'b', 'c', 'd'];
          }
        })
        .state('state2', {
          url:"/state2",
          templateUrl: "partials/state2.html"
        })
        .state('state2.list', {
          url:"/list",
          templateUrl: "partials/state2.list.html",
          controller: function($scope) {
            $scope.things = ['a2', 'b2', 'c2', 'd2'];
          }
        });
    }
  ]);



counterApp.controller('counterController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.myFunc = function() {
        $scope.count++;
    };
}]);

