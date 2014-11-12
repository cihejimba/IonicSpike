define(function (require) {
    'use strict';

    var angular = require('angular');

    return angular.module('headlines', [])
        .directive('headlines', require('./HeadlinesDirective'))
        .service('headlinesService', require('./HeadlinesService'));
});
