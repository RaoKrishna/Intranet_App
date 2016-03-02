/**
 * Created by Krishna Rao on 01-03-2016.
 */

(function() {

    'use strict'

    angular.module('IntranetApp').controller('ViewProductsController', ViewProductsController);

    function ViewProductsController($scope, ProductService, $http, ObjectStatesService, $stateParams) {

        var vm = this;
        vm.init = init;
        vm.isActive = isActive;

        init();

        function init() {
            ObjectStatesService.fetchProducts().then(function(productList){
                vm.products = productList;
            });
        }


        function isActive(module) {
            if(module === $stateParams.activemodule) {
                console.log('Is active')
                return true;
            }
            console.log('Is inactive')
            return false;
        }
    }

})();
