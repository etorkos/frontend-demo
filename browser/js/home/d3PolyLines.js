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

             var margin = {top: 30, right: 30, bottom: 30, left: 60};
             var height = 500 - margin.top - margin.bottom;
             var width = 700 - margin.left - margin.right;
             var svg = d3.select(iElement[0])
                 .append("svg")
                 .attr("width", "100%")
                 .attr("height", height+margin.top + margin.bottom)
                 .style('background-color', 'white') ;

             // watch for data changes and re-render
             // scope.$watch('data', function(newVals, oldVals) {
             //   return scope.render(newVals);
             // }, true);
            
            var nestedData = d3.nest()
               .key(function(d){ return d.zone })
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
                     .domain([0, scope.data[scope.data.length-1].time + 2])
                     .range([0, width]);
               yScale = d3.scale.linear()
                     .domain([60, d3.max(scope.data, function (d) {
                       return Math.floor(d.val+10);
                     })])
                     .range([height, 0]);

               xAxisGen = d3.svg.axis()
                     .scale(xScale)
                     .orient('bottom')
                     .ticks(12);
                     //should make responsive in future

               yAxisGen = d3.svg.axis()
                     .scale(yScale)
                     .orient("left")
                     .ticks(6);

               lineFun = d3.svg.line()
                     .x(function (d) {
                       return xScale(d.time);
                     })
                     .y(function (d) {
                       return yScale(d.val);
                     })
                     .interpolate("linear");

            }

             function drawLineChart() {
                  console.log('called drawLineChart');
                  console.log(nestedData);
                  setAxes();

                  var zoneLine = svg.selectAll('.zone')
                  .data(nestedData)
                  .enter()
                  .append("g")
                  .attr("class", "zone-line")

                  svg.append("g")
                     .attr("class", "x axis")
                     .attr("transform", "translate("+margin.left+","+height+")")
                     .call(xAxisGen);

                  svg.append("g")
                     .attr("class", "y axis")
                     .attr("transform", "translate("+margin.left+",0)")
                     .call(yAxisGen);

                  zoneLine.append("path")
                    .attr("d", function(d){ return lineFun(d.values) })
                     .attr({
                        "stroke-width": 2,
                        "fill": "none",
                        "class": pathClass,
                     })
                     .style("stroke", function(d){ return color(d.key)})
                     .attr("transform", "translate("+margin.left+",0)");

                     zoneLine.selectAll("circle")
                       .data(function(d) {
                            return(d.values);
                        })
                        .enter().append("circle")
                        .attr("cx", function(d){ return xScale( d.time ); })
                        .attr("cy", function(d){ return yScale( d.val ); })
                        .attr("stroke-width", 4.8)
                        .attr("stroke-opacity", 1)
                        .attr("fill-opacity", 0)
                        .attr("r", 3)
                        .attr("transform", "translate("+margin.left+",0)")
                        .on("mouseover", function(d, i) { console.log("value: "+ d.val+" Time stamp: "+d.time); })
                        .on('click', function(d,i){
                          console.log("node clicked. Hiding all non-grouped fans");
                          hideOtherFans(zoneLine, d.group)
                        });
             }

             function hideOtherFans ( lines, myGroup){
              console.log(myGroup);
              lines.selectAll('path')
                .data(function(d) {
                  console.log(d);
                  return(d.values);
                })
                .attr('opacity', function(d){
                  var op = myGroup !== d.group ? 0.2 : 1;
                  return op;
                });
             }
             drawLineChart();
      }}
}]);