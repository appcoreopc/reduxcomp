import React, { Component, PropTypes } from 'react'
import fade from 'fade'

export default class Slider extends Component {

  constructor(props) {
    super(props)
  	this.loopTransition = this.loopTransition.bind(this)
  	this.state = { 
  		opacity : 1
  	}
  }
  
componentDidMount()
{
  	// define ref obj to imagebox 
  	let elem = this.refs.imagebox 
	  // loop function
  	let loops = this.loopTransition
  	let opacity = this.state.opacity
  	
   if (elem) {
		const { width, height } = this.props
	  	elem.src = 'pix.jpg'   
		  elem.style.opacity = opacity
		  elem.width = width
		  elem.height = height

	    window.requestAnimationFrame(function() {
		   	    elem.style.transition = "linear 5s"
	        	elem.style.opacity = 0
	        	elem.addEventListener("transitionend", loops, false);
	   	});
	}
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
 	if ( prevState == 0)
 		return 1
 	else 
 		return 0
 }

loopTransition(e)
{
	let elem = this.refs.imagebox
	var self =  this
	var opacity = self.getNextOpacity(elem.style.opacity)

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