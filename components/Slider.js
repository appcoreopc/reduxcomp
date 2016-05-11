import React, { Component, PropTypes } from 'react'
import fade from 'fade'

export default class Slider extends Component {
  
  
  constructor(props) {

    super(props)
	console.log(props.timeout)
  	console.log(props.repeat)
  	this.loopTransition = this.loopTransition.bind(this)

  	this.state = { 
  		opacity : 1
  	}
  }

  
  componentDidMount()
  {

  	let elem = this.refs.imagebox
  	let loops = this.loopTransition
  	let opacity = this.state.opacity
  	var self = this;

  		elem.src = 'pix.jpg'   
		elem.style.opacity = opacity

    	window.requestAnimationFrame(function() {
	   	    elem.style.transition = "linear 5s"
        	elem.style.opacity = 0
        	elem.addEventListener("transitionend", loops, false);
   		});
 }

 setOpacity(current)
 {
 	if (current == 0) 
 	{
 		this.setState = {
 			opacity : 1
 		}
 	}
 	else 
 	{
 		this.setState = {
 			opacity : 0
 		}	
 	}
 }


 getNextOpacity(prevState)
 {
 	if ( prevState== 0)
 		return 1
 	else 
 		return 0
 }


loopTransition(e)
{
	let elem = this.refs.imagebox
	var self =  this
	console.log('prev')
	console.log(elem.style.opacity)

	var opacity = self.getNextOpacity(elem.style.opacity)
	console.log('future')
	console.log(opacity)

  	window.requestAnimationFrame(function() {
        elem.style.transition = "linear 5s"
        elem.style.opacity = self.getNextOpacity(elem.style.opacity)
    });
}

  render() {
    return (
     <div className='sliderBox'>
        <img ref='imagebox' />
    </div>    
    )
  }
}