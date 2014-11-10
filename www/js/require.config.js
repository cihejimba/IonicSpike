(function (require) {
    'use strict';
    require.config({
        baseUrl: '/js',
        paths: {
            'text': '../lib/text/text',
            'angular': '../lib/ionic/js/ionic.bundle',
            'd3': '../lib/d3/d3.min'
        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            d3: {
                exports: 'd3'
            }
        }
    });
})(window.require);
