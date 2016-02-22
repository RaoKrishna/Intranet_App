/**
 * Created by Krishna Rao on 21-02-2016.
 */

(function(){
    angular.module('IntranetApp').factory('ProductService', ProductService);

    function ProductService($http) {
        return {
            query: function() {
                return $http.get('http://localhost:5669/api/product/')
                    .then(function(response){
                        return response.data;
                    });
            },
            post: function(product) {
                return $http.post('http://localhost:5669/api/product/', product)
                    .then(function(response){
                        return response.data;
                    });
            }
        }
    }
})();
