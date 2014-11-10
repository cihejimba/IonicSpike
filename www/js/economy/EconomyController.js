define(function (require) {
    'use strict';

    function EconomyController ($scope, economyService) {

        $scope.model = {
            economyData: null
        };

        $scope.fetchData = function() {
            economyService.getAll()
                .then(function(data) {
                    $scope.model.economyData = data;
                }, function(error) {
                    console.log('error', error);
                });
        };

        $scope.fetchData();

    }

    EconomyController.$inject = ['$scope', 'economyService'];

    return EconomyController;
});