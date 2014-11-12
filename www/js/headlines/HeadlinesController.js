define(function (require) {
    'use strict';

    function HeadlinesController ($scope, headlinesService) {

        $scope.headlines = headlinesService.get();

    }

    HeadlinesController.$inject = ['$scope', 'headlinesService'];

    return HeadlinesController;
});