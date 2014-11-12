define(function (require) {
    'use strict';

    var MarketsController = require('./MarketsController');
    var template = require('text!./markets.html');

    function MarketsDirective() {
        return {
            replace: true,
            restrict: 'EA',
            scope: {},
            controller: MarketsController,
            template: template
        };
    }

    return MarketsDirective;
});