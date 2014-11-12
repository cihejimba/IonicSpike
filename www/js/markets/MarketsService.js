define(function () {
    'use strict';

    var ENDPOINT = 'http://www.quandl.com/api/v1/datasets/ODA/AUS_NGDP_R.json?column=1';

    function MarketsService($q, $http) {

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

    MarketsService.$inject = ['$q', '$http'];

    return MarketsService;
});
