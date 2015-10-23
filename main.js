angular.module('myApp', [])
.controller('MainController', function($scope) {
  $scope.name = "Shaun";
  $scope.sayHello = function() {
    $scope.greeting = "Hello " + $scope.name;
  }
})
