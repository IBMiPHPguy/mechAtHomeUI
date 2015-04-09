'use strict';

angular.module('mechAtHomeUiApp')

.factory('AuthenticationService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (email, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            //$timeout(function(){
            //    var response = { success: username === 'test' && password === 'test' };
            //    if(!response.success) {
            //        response.message = 'Username or password is incorrect';
            //    }
            //    callback(response);
            //}, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            $http.post('http://localhost:8000/login', { email: email, password: password })
                .success(function (response) {
                    callback(response);
                });

        };

        service.SetCredentials = function (email, token, userID, userName) {
            $rootScope.globals = {
                currentUser: {
                    email: email,
                    token: token,
                    userID: userID,
                    userName: userName
                }
            };
            $http.defaults.headers.common['X-Auth-Token'] = token; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common['X-Auth-Token']  = '';
        };

        return service;
    }]);
