/**
 * Created by Krsnaa on 17-02-2016.
 */

(function(){

    'use strict'

    angular.module('IntranetApp').controller('ProductController', ProductController);

    function ProductController($scope, ProductService, $http) {

        var vm = this;
        vm.init = init;
        vm.isActiveTab = isActiveTab;
        vm.tabClick = tabClick;
        vm.product;
        vm.SaveProduct = SaveProduct;

        init();

        function init() {
            vm.currentTab = "Views/ViewProducts.html";
            ProductService.query().then(function(data){
                vm.products = data;
            })
        }

        function isActiveTab(url){
            return url === vm.currentTab;
        }

        function tabClick(tab){
            vm.currentTab = tab.url;
        }

        function SaveProduct(product) {
            if(product.productType == 1) {
                product.productType = "PP";
            } else {
                product.productType = "ABS";
            }

            ProductService.post(product).then(function(data){
                console.log('Data inserted successfully');
            })
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

        /*vm.products = [
            {
                "id" : 1,
                "type" : "PP",
                "name" : "Small Ivory PP"
            },
            {
                "id" : 2,
                "type" : "ABS",
                "name" : "Silver Etching Flat Big"
            },
            {
                "id" : 3,
                "type" : "ABS",
                "name" : "Silver Double Locking Ring"
            },
            {
                "id" : 4,
                "type" : "PP",
                "name" : "Double Locking PP"
            }
        ]*/

        vm.productType = [
            {
                name: "PP",
                value: 1
            },
            {
                name: "ABS",
                value: 2
            }
        ]
    }
})();
