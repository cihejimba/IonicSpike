define(function (require) {
    'use strict';

    var d3 = require('d3');
    var d3xter = require('d3xter');

    function EconomyDirective($parse) {
        return {
            replace: false,
            restrict: 'E',
            scope: {
                data: '=chartData'
            },
            link: function (scope, element, attrs) {

                /*var data = [10,20,30,40,60]; //attrs.chartData.split(',');  //TEMP
                var chart = d3.select(element[0]);

                chart.append("div").attr("class", "chart")
                    .selectAll('div')
                    .data(data).enter().append("div")
                    .transition().ease("elastic")
                    .style("width", function(d) { return d + "%"; })
                    .text(function(d) { return d + "%"; });*/


                var x = [-0.8234, 0.0952, 1.9594, -0.2831, -0.4147, 1.5859, 0.5326, 0.0925, 0.3293, 1.3635, 0.3396, 0.0677, -0.6739, 0.4084, -1.4487, -0.1101, -0.7521, -1.2118, 1.7191, 0.2020, -0.1573, -0.2298, -0.8230, 1.7924, 0.4511];
                var y = [-1.4166, 1.353, -0.6294, 0.0567, 1.4157, 0.32806, 0.2377, -0.2262, -1.0602, -1.8150, 0.1075, -1.3516, 1.0137, 0.0183, -0.5466, 0.6416, -0.6655, 0.6874, -0.4616, -0.2808, 1.3443, -1.0518, -0.1332, -1.0097, 0.3643];
                var index = [];
                x.forEach(function(elem,i){
                    index.push(i);
                });

                var histogram = histo(x, { selector: '#histo-container' });
                var lineGraph = xyPlot(index, y, { selector: '#line-container' });
                var scatterPlot = scatter(x, y, { selector: '#scatter-container' });



            }
        };
    }

    return EconomyDirective;
});