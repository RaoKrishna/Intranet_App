/**
 * Created by Krsnaa on 17-02-2016.
 */

(function(){

    'use strict'

    angular.module('IntranetApp').controller('ProductionController', ProductionController);

    function ProductionController($scope) {

        var vm = this;
        vm.init = init;
        vm.isActiveTab = isActiveTab;
        vm.tabClick = tabClick;

        init();

        function init() {
            vm.currentTab = "Views/ViewProducts.html";
        }

        function isActiveTab(url){
            return url === vm.currentTab;
        }

        function tabClick(tab){
            vm.currentTab = tab.url;
        }

        vm.tabs = [
            {
                title: "View",
                url: "Views/ViewProducts.html"
            },
            {
                title: "Create",
                url: "Views/CreateEditProduct.html"
            }
        ]
    }
})();
