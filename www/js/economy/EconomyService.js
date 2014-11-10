define(function () {
    'use strict';

    //var ENDPOINT = 'http://www.quandl.com/api/v1/datasets/ODA/AUS_NGDP_R.json?column=1';
    var ENDPOINT = 'http://localhost:8100/data/economy.json';

    function EconomyService($q, $http) {

        this.getAll = function() {
            var deferred = $q.defer();

            $http.get(ENDPOINT)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

    }

    EconomyService.$inject = ['$q', '$http'];

    return EconomyService;
});
