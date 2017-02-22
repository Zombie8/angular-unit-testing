(function() {
    'use strict';

    //REGISTER
    angular
        .module('GettingStarted')
        .controller('appController', appController);

    //INJECT
    appController.$inject = [ '$location', '$routeParams' ];

    //FUNCTION DEFINTION
    function appController( $location, $routeParams ) {

        var vm = this;

        vm.locationProtocol = '';
        vm.locationURL = '';
        vm.locationHost = '';
        vm.locationPort = '';
        vm.locationSearchParams = {};

        initController();

        function initController() {
            
            vm.locationProtocol = $location.protocol();
            vm.locationURL = $location.absUrl();
            vm.locationHost = $location.host();
            vm.locationPort = $location.port();
            vm.locationSearchParams = $location.search();

        }

    } 

})();