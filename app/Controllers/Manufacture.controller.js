/**
 * Created by Krishna Rao on 02-03-2016.
 */

(function() {
    'use strict'

    angular.module('IntranetApp').controller('ManufactureController', ManufactureController);

    function ManufactureController($state, ObjectStatesService) {

        var vm = this;
        vm.init = init;
        vm.shots = 1;
        vm.perDayShot = 1;
        vm.materialRate = 1;
        vm.matCostPerPiece = 1;
        vm.selectProduct = selectProduct;

        init();

        function init() {
            ObjectStatesService.fetchProducts().then(function(productList){
                vm.products = productList;
            });
            vm.showExpectedOutput = false;
        }

        function selectProduct() {
            vm.showExpectedOutput = true;
            var product = vm.products.filter(function(prod) {
                if(prod.productId === vm.selectedProduct) {
                    return prod;
                }
            });
            vm.product = product[0];
            vm.perDayShot = vm.product.shots * vm.product.hours * 60;
            vm.matCostPerPiece = vm.product.materialRate * vm.product.weight / 1000;
            vm.perDayOutput = vm.perDayShot * vm.product.cavity;
            vm.labCostPerPiece = vm.product.labour / vm.perDayOutput;
            vm.weightPerDay = vm.perDayOutput * vm.product.weight / 1000;
            vm.totalCostPerPiece = vm.matCostPerPiece + vm.labCostPerPiece;
        }

    }
})();