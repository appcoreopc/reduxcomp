import React, { Component, PropTypes } from 'react'

class ForgotPassword extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (      
      <div>
        <input type='text' placeholder='Enter email address '/>
        <button> Recover </button>
      </div>    
    )
  }
}

export default ForgotPassword
