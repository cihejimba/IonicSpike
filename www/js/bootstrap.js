define(function (require) {
    'use strict';

    var ionic = require('ionic');
    var angular = require('angular');
    var app = require('app');

    var $html,
        onDeviceReady = function () {
            angular.bootstrap(document, [app.name]);
        };

    document.addEventListener('deviceready', onDeviceReady, false);

    if (typeof cordova === 'undefined') {
        $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function () {
            try {
                angular.bootstrap(document, [app.name]);
            } catch (e) {
                console.error(e.stack || e.message || e);
            }
        });
    }

});