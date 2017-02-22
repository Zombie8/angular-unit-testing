(function(){
    'use strict';

    // CREATE NEW MODULE
    angular.module('GettingStarted', ['ngRoute']);

    // FETCH INSTANCE OF NEW MODULE
    var app = angular.module('GettingStarted');

    // CONFIGURE NEW MODULE 
    app.config(function($routeProvider) {
            
            $routeProvider
                .when('/', {
                    templateUrl: 'app.html',
                    controller: 'appController',
                })
                .when('/app2', {
                    templateUrl: 'app2.html',
                    controller: 'app2Controller'
                });
                
        });

})();