define(function (require) {
    'use strict';

    var angular = require('angular');
    var angularResource = require('angularResource');
    var uiRouter = require('uiRouter');
    var ionicAngular = require('ionicAngular');

    var deps = [
        'ionic',
        'ngResource',
        require('./economy/EconomyModule').name,
        require('./headlines/HeadlinesModule').name,
        require('./markets/MarketsModule').name
    ];

    return angular.module('application', deps)

        .directive('application', require('./application/AppDirective'))
        .config(require('./application/Routes'))

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if(window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if(window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        });

});
