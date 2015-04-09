'use strict';

/**
 * @ngdoc function
 * @name mechAtHomeUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mechAtHomeUiApp
 */
angular.module('mechAtHomeUiApp')
  .controller('LoginCtrl',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.email, $scope.password, function(response) {
                if(response.success) {
                    var userInfo = response.user;
                    var userMI = userInfo.minit.trim();
                    if (userMI.length > 0) {
                      var userName = userInfo.fname+' '+userMI+'. '+userInfo.lname;
                    } else {
                      var userName = userInfo.fname+' '+userInfo.lname;
                    }
                    AuthenticationService.SetCredentials($scope.email, response.token, userInfo.id, userName);
                    $location.path('/profile');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);
