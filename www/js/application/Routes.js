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
                        //templateUrl: "js/headlines/headlines.html"
                    }
                }
            })

            .state('app.economy', {
                url: "/economy",
                views: {
                    'menuContent' :{
                        templateUrl: "js/economy/economy.html"
                    }
                }
            })

            .state('app.markets', {
                url: "/markets",
                views: {
                    'menuContent' :{
                        //templateUrl: "templates/markets.html"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/economy');
    }

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    return Routes;
});
