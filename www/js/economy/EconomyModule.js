define(function (require) {
    'use strict';

    var angular = require('angular');

    return angular.module('economy', [])
        .directive('economy', require('./EconomyDirective'))
        .directive('economyChart', require('./EconomyChartDirective'))
        .service('economyService', require('./EconomyService'));
});
