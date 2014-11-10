define(function (require) {
    'use strict';

    var EconomyController = require('./EconomyController');
    var template = require('text!./economy.html');

    function EconomyDirective() {
        return {
            replace: true,
            restrict: 'EA',
            scope: {},
            controller: EconomyController,
            template: template
        };
    }

    return EconomyDirective;
});