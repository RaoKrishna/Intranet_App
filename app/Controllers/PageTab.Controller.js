/**
 * Created by Krishna Rao on 13-02-2016.
 */

(function(){
    'use strict'

    angular.module('IntranetApp').controller('PageTabController', PageTabController);

    function PageTabController($state) {

        var vm = this;
        vm.init = init;
        vm.goTo = goTo;
        vm.isActiveTab = isActiveTab;
        init();

        function init(){
            if(vm.name == null || vm.name == '') {
                vm.name = 'home';
            }
            vm.activeTab = vm.name;
        }

        function goTo(name){
            vm.activeTab = name;
            vm.name = name;
            $state.go(name);
        }

        function isActiveTab(name){
            return vm.activeTab === name;
        }
    }
})();
