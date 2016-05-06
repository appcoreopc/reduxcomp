import React, { Component, PropTypes } from 'react'
import ForgotPassword from './ForgotPassword'

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

        { this.props.showForgetPassword == true ? <ForgotPassword /> : null }
        
      </div>
    )
  }
}

export default SignIn
