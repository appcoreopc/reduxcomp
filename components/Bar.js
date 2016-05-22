import React, { Component, PropTypes } from 'react'
import d3 from 'd3'

export default class Bar extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount()
  {

    var data = this.props.dataset
    var color = d3.scale.category20c()  

    var width = 420,
    barHeight = 20;

    var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width])

    var chart = d3.select("#barchart").append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length)

    var bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1)
    .attr("fill", function(d, i) {
      return color(i)
    })

    bar.append("text")
    .attr("x", function(d) { return x(d) - 20 })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

  }

  render() {
    return (
      <div>
        <div id="barchart"></div>
      </div> 
      )
  }
}