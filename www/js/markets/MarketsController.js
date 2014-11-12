define(function (require) {
    'use strict';

    function MarketsController ($scope, marketsService) {

        $scope.model = {
            marketsData: null
        };

        $scope.fetchData = function() {
            marketsService.getAll()
                .then(function(data) {
                    $scope.model.marketsData = data;
                }, function(error) {
                    console.log('error', error);
                });
        };

        $scope.fetchData();

    }

    MarketsController.$inject = ['$scope', 'marketsService'];

    return MarketsController;
});