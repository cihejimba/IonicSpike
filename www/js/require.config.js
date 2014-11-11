requirejs.config({
    paths: {
        angular:          '../lib/angular/angular',
        angularAnimate:   '../lib/angular-animate/angular-animate.min',
        angularSanitize:  '../lib/angular-sanitize/angular-sanitize.min',
        uiRouter:         '../lib/angular-ui-router/release/angular-ui-router.min',
        ionic:            '../lib/ionic/js/ionic.min',
        ionicAngular:     '../lib/ionic/js/ionic-angular.min',
        text:             '../lib/text/text',
        d3:               '../lib/d3/d3.min',
        app:              'application/AppModule'
    },
    shim: {
        angular : {exports : 'angular'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        uiRouter : {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        ionicAngular: {deps: ['angular', 'ionic', 'uiRouter', 'angularAnimate', 'angularSanitize']},
        d3: {exports: 'd3'}
    },
    priority: [
        'angular',
        'ionic'
    ],
    deps: [
        'bootstrap'
    ]
});
