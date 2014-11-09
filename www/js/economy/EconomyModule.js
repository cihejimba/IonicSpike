define(function (require) {
    'use strict';

    var angular = require('angular');

    return angular.module('events', [])
        .directive('events', require('./EventDirective'))
        .service('photoService', require('../services/PhotoService'));
});
