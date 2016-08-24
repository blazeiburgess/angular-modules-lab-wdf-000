function MainController ($scope) {
  $scope.name = "Name";
}

angular
  .module('app')
  .controller('MainController', MainController)
