define(function (require) {
    'use strict';

    var angular = require('angular');
    var uiRouter = require('uiRouter');
    var ionicAngular = require('ionicAngular');

    var deps = [
        'ionic',
        require('./economy/EconomyModule').name
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
