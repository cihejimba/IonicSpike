define(function (require) {
    'use strict';

    var angular = require('angular');

    return angular.module('markets', [])
        .directive('markets', require('./MarketsDirective'))
        .service('marketsService', require('./MarketsService'));
});
