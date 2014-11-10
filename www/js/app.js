define(function (require) {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['application']);
    });

    return {
        'application': require('./application/AppModule'),
        'economy': require('./economy/EconomyModule')
    };
});