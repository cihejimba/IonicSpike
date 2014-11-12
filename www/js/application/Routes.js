define(function () {
    'use strict';

    function Routes ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })

            .state('app.headlines', {
                url: "/headlines",
                views: {
                    'menuContent' :{
                        template: "<div headlines></div>"
                    }
                }
            })

            .state('app.story', {
                url: "/headlines/:storyId",
                views: {
                    'menuContent' :{
                        templateUrl: "js/headlines/story.html"
                    }
                }
            })

            .state('app.economy', {
                url: "/economy",
                views: {
                    'menuContent' :{
                        template: "<div economy></div>"
                    }
                }
            })

            .state('app.markets', {
                url: "/markets",
                views: {
                    'menuContent' :{
                        template: "<div markets></div>"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/headlines');
    }

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    return Routes;
});
