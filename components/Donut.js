import React, { Component, PropTypes } from 'react'
import d3 from 'd3'

export default class DonutTest extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount()
  {

    var w = 400
    var h = 400
    var r = h/2
    var color = d3.scale.category20c()
    var donutWidth = 75

    var data = this.props.dataset
    var vis = d3.select('#donutChart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")")
    var pie = d3.layout.pie().value(function(d){return d.value;})

    // declare an arc generator function
    var arc = d3.svg.arc().innerRadius(r - donutWidth).outerRadius(r)

  // select paths, use arc generator to draw
  var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice")
  arcs.append("svg:path")
  .attr("fill", function(d, i){
    return color(i);
  })
  .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
      })

// add the text
arcs.append("svg:text").attr("transform", function(d){
  d.innerRadius = 0;
  d.outerRadius = r;
  return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label;}
    )

  var legendRectSize = 18;                                  
  var legendSpacing = 4;    

  var legend = vis.selectAll('.legend').data(color.domain())                                   
  .enter()                                                
  .append('g')                                            
  .attr('class', 'legend')                                
  .attr('transform', function(d, i) {                     
    var height = legendRectSize + legendSpacing;          
    var offset =  height * color.domain().length / 2;     
    var horz = -2 * legendRectSize;                       
    var vert = i * height - offset;                       
    return 'translate(' + horz + ',' + vert + ')';        
  });                                                     

  legend.append('rect')                                     
  .attr('width', legendRectSize)                          
  .attr('height', legendRectSize)                         
  .style('fill', color)                                   
  .style('stroke', color);                                

  var dataset = this.props.dataset;
  legend.append('text')                                     
  .attr('x', legendRectSize + legendSpacing)              
  .attr('y', legendRectSize - legendSpacing)              
  .text(function(d) { 

    return dataset[d].label });                       

}

render() {
  return (
    <div>
    <div id='donutChart'>
    </div>
    </div> 
    )
}
}