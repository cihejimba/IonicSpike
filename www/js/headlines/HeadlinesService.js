define(function () {
    'use strict';

    var ENDPOINT = 'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=asx200';

    function HeadlinesService($resource) {

        return $resource(ENDPOINT,
            { callback: 'JSON_CALLBACK' },
            { get: { method: 'JSONP' }
        });

    }

    HeadlinesService.$inject = ['$resource'];

    return HeadlinesService;
});
