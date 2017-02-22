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
        vm.message = '';
        vm.updateMessage = updateMessage;
        vm.animalsArray = [];

        initController();

        function initController() {

            vm.message = 'On Load Message';

            vm.animalsArray = ['dog', 'cats', 'rabbits'];
            
            vm.locationProtocol = $location.protocol();
            vm.locationURL = $location.absUrl();
            vm.locationHost = $location.host();
            vm.locationPort = $location.port();
            vm.locationSearchParams = $location.search();

            var urlParams = $routeParams;
        }

        function updateMessage() {

            vm.message = 'After Click Message';

        }

    } 

})();