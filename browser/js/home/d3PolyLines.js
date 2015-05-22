'use strict';

app.directive('d3PolyLines', ['d3', function(d3) {
   return {
        restrict: 'EA',
        scope: {
          data: "=",
          label: "@",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {

             var height = 500
             var svg = d3.select(iElement[0])
                 .append("svg")
                 .attr("width", "100%")
                 .attr("height", height)
                 .style('background-color', 'white') ;

             // watch for data changes and re-render
             // scope.$watch('data', function(newVals, oldVals) {
             //   return scope.render(newVals);
             // }, true);
            
            var nestedData = d3.nest()
               .key(function(d){ return d.zone })
               .key(function(d){ return d.time })
               .entries(scope.data);

             var padding = 20;
             var pathClass="path";
             var xScale, yScale, xAxisGen, yAxisGen, lineFun;

             var rawSvg = iElement.find("svg")[0];
             // var svg = d3.select(rawSvg);

             var color = d3.scale.category20();

            function setAxes () {
               console.log("called setAxes");
               xScale = d3.scale.linear()
                     .domain([0, scope.data[scope.data.length-1].time])
                     .range([padding + 5, rawSvg.clientWidth - padding]);
               yScale = d3.scale.linear()
                     .domain([60, d3.max(scope.data, function (d) {
                       return d.val;
                     })+10 ])
                     .range([rawSvg.clientHeight - padding, 0]);
               xAxisGen = d3.svg.axis()
                     .scale(xScale)
                     .orient('bottom')
                     .ticks(9);
                     //should make responsive in future

               yAxisGen = d3.svg.axis()
                     .scale(yScale)
                     .orient("left")
                     .ticks(5);

               lineFun = d3.svg.line()
                     .x(function (d) {
                       return xScale(d.time);
                     })
                     .y(function (d) {
                       return yScale(d.val);
                     })
                     .interpolate("basis");

            }

             function drawLineChart() {
                  console.log('called drawLineChart');
                  setAxes();

                  var zoneLine = svg.selectAll('.zone')
                  .data(nestedData)
                  .enter()
                  .append("g")
                  .attr("class", "zone-line")

                  svg.append("g")
                     .attr("class", "x axis")
                     .attr("transform", "translate(0,180)")
                     .call(xAxisGen);

                  svg.append("g")
                     .attr("class", "y axis")
                     .attr("transform", "translate(20,0)")
                     .call(yAxisGen);

                  zoneLine.append("path")
                    .attr("d", function(d){ return lineFun(scope.data) })
                     .attr({
                        "stroke-width": 2,
                        "fill": "none",
                        "class": pathClass
                     })
                     .style("stroke", function(d){ return color(d.key)});
             }
             drawLineChart();
      }}
}]);