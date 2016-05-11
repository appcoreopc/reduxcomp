import React, { Component, PropTypes } from 'react'
import fade from 'fade'

export default class Slider extends Component {
  constructor(props) {
    super(props)

  console.log(props.timeout)
  console.log(props.repeat)

  }

  componentDidMount()
  {
  	var elem = this.refs.imagebox
  	elem.src = 'pix.jpg'   
    elem.style.opacity = 1;
    window.requestAnimationFrame(function() {
        elem.style.transition = "opacity 5000ms";
        elem.style.opacity = 0;
    });
  }

  render() {
    return (
     <div>
        <img ref='imagebox' />
    </div>    
    )
  }
}