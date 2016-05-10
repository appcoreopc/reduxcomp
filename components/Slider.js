import React, { Component, PropTypes } from 'react'
import fade from 'fade'

export default class Slider extends Component {
  constructor(props) {
    super(props)
//  this.handleKeyUp = this.handleKeyUp.bind(this)
//  this.handleGoClick = this.handleGoClick.bind(this)

  console.log(props.timeout)
  console.log(props.repeat)

  }

  componentDidMount()
  {
  	var target = document.querySelector("#image1")
  	fade.in(target, 10000);
  	fade.in(target, 10000);
  	fade.in(target, 10000);
  }

  componentWillReceiveProps(nextProps) {
  }

  getInputValue() {
    return this.refs.input.value
  }

  setInputValue(val) {
    this.refs.input.value = val
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick() {
    this.props.onChange(this.getInputValue())
  }

  render() {
    return (
     <div>
        <img id='image1' src="./pix.jpg" />
    </div>    
    )
  }
}
