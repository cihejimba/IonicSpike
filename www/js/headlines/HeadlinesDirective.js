define(function (require) {
    'use strict';

    var HeadlinesController = require('./HeadlinesController');
    var template = require('text!./headlines.html');

    function HeadlinesDirective() {
        return {
            replace: true,
            restrict: 'EA',
            scope: {},
            controller: HeadlinesController,
            template: template
        };
    }

    return HeadlinesDirective;
});