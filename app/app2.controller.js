(function() {
    'use strict';

    //REGISTER
    angular
        .module('GettingStarted')
        .controller('app2Controller', app2Controller);

    //INJECT
    app2Controller.$inject = [ '$routeParams' ];

    //FUNCTION DEFINTION
    function app2Controller( $routeParams ) {

        var vm = this;

        vm.routeParameters = [];

        initController();

        function initController() {

            vm.routeParameters = $routeParams;

        }

    }

})();