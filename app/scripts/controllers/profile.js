'use strict';

/**
 * @ngdoc function
 * @name mechAtHomeUiApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mechAtHomeUiApp
 */
angular.module('mechAtHomeUiApp')
  .controller('ProfileCtrl',
    ['$scope', '$rootScope', '$location', 'AuthenticationService', '$modal',
    function ($scope, $rootScope, $location, AuthenticationService, $modal) {
        var obj = $rootScope.globals;
        $scope.userName = obj.currentUser.userName;
        $scope.token = obj.currentUser.token;
        $scope.userID = obj.currentUser.userID;
        $scope.email = obj.currentUser.email;

        $scope.openPhones = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'phoneModalContent.html',
            controller: 'PhoneModalInstanceCtrl',
            size: size
          });
        };
        $scope.openAutos = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'autosModalContent.html',
            controller: 'AutosModalInstanceCtrl',
            size: size
          });
        };
        $scope.openLocations = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'locationsModalContent.html',
            controller: 'LocationsModalInstanceCtrl',
            size: size
          });
        };
        $scope.openServHist = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'servHistModalContent.html',
            controller: 'ServHistModalInstanceCtrl',
            size: size
          });
        };
        $scope.openProfile = function (size) {

          var modalInstance = $modal.open({
            templateUrl: 'profileModalContent.html',
            controller: 'ProfileModalInstanceCtrl',
            size: size
          });
        };
    }]);

angular.module('mechAtHomeUiApp')
  .controller('PhoneModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.phonesClose = function () {
    $modalInstance.close();
  };
});

angular.module('mechAtHomeUiApp')
  .controller('AutosModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.autosClose = function () {
    $modalInstance.close();
  };
});

angular.module('mechAtHomeUiApp')
  .controller('LocationsModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.locationsClose = function () {
    $modalInstance.close();
  };
});

angular.module('mechAtHomeUiApp')
  .controller('ServHistModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.servHistClose = function () {
    $modalInstance.close();
  };
});

angular.module('mechAtHomeUiApp')
  .controller('ProfileModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.profileClose = function () {
    $modalInstance.close();
  };
});
