define(function (require) {
    'use strict';

    var d3 = require('d3');

    function EconomyDirective($parse) {
        return {
            replace: false,
            restrict: 'E',
            scope: {
                data: '=chartData'
            },
            link: function (scope, element, attrs) {

                var data = [10,20,30,40,60]; //attrs.chartData.split(',');  //TEMP
                var chart = d3.select(element[0]);

                chart.append("div").attr("class", "chart")
                    .selectAll('div')
                    .data(data).enter().append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) { return d + "%"; })
                    .text(function(d) { return d + "%"; });

            }
        };
    }

    return EconomyDirective;
});