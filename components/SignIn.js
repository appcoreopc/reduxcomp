import React, { Component, PropTypes } from 'react'

class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='name'/>
        <input type='text' placeholder='password' />
      <button> Sign In </button>
      </div>
    
    )
  }
}

export default SignIn
