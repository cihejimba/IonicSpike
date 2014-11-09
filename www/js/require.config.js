(function (require) {
    'use strict';
    require.config({
        baseUrl: '/js',
        paths: {
            'text': '../lib/text/text',
            'angular': '../lib/ionic/js/ionic.bundle'
        },
        shim: {
            'angular': {
                exports: 'angular'
            }
        }
    });
})(window.require);
