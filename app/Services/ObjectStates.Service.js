/**
 * Created by Krishna Rao on 25-02-2016.
 */

(function(){
    angular.module('IntranetApp').service('ObjectStatesService', ObjectStatesService);

    function ObjectStatesService(ProductService, $http) {
        var productList = [];
        var productTypeList = [];
        this.fetchProducts = fetchProducts;
        this.fetchProductTypes = fetchProductTypes;
        this.insertData = insertData;

        function fetchProducts() {
            if(productList.length == 0) {
                return $http.get('http://localhost:5669/api/product/')
                    .then(function(response){
                        productList = response.data;
                        return response.data;
                    });
            }
            else {
                return new Promise(function(resolve, reject) {
                    return resolve(productList);
                });
            }
        }

        function fetchProductTypes() {
            if(productTypeList.length == 0) {
                return $http.get('http://localhost:5669/api/productTypes/')
                    .then(function(response){
                        productTypeList = response.data;
                        return response.data;
                    });
            }
            else {
                return new Promise(function(resolve, reject) {
                    return resolve(productTypeList);
                });
            }
        }

        function insertData(product){
            console.log(product);
            productList.push(product);
        }
    }
})();
