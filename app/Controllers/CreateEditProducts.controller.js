/**
 * Created by Krishna Rao on 01-03-2016.
 */

(function() {

    'use strict'

    angular.module('IntranetApp').controller('CreateEditProductsController', CreateEditProductsController);

    function CreateEditProductsController($scope, ProductService, $http, ObjectStatesService, $stateParams, $state) {

        var vm = this;
        vm.init = init;
        vm.isActive = isActive;
        vm.product;
        vm.SaveProduct = SaveProduct;

        init();

        function init() {
            //vm.productType = ObjectStatesService.fetchProductTypes();
            ObjectStatesService.fetchProductTypes().then(function(productTypeList){
                vm.productType = productTypeList;
                vm.selectedType = productTypeList[0].productTypeID;
                console.log('In inut ' + vm.selectedType);
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

        function SaveProduct(product, type) {
            console.log(type);
            if(vm.selectedType == 1) {
                product.productType = "PP";
            } else {
                product.productType = "ABS";
            }

            ProductService.post(vm.product).then(function(data){
                vm.product.productId = data;
                ObjectStatesService.insertData(vm.product);
                $state.go('viewproducts');
            })
        }
    }

})();
