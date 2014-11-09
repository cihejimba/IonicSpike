define(function (require) {
    'use strict';

    var AppController = require('./AppController');
    var layout = require('text!./application.html');

    function AppDirective() {
        return {
            replace: true,
            restrict: 'EA',
            scope: {

            },
            controller: AppController,
            template: layout,
            link: function($scope, $element, attrs) {



            }
        };
    }

    return AppDirective;
});