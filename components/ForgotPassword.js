import React from 'react'
import { connect } from 'react-redux'
import { doForgotPassword } from "../actions"

const mapStateToProps = (state, ownProps) => {
  return {
    email : state.forgotpassword.email, 
    message : state.forgotpassword.message
  }
}

let ForgotPassword = ({dispatch, email, message}) => 
{
  
  let emailInput

  return (

   <div className='gridbox'>
      <form onSubmit={e => {
        e.preventDefault()
        doForgotPassword(dispatch, {
            email : emailInput.value, 
            message : 'no mesage'
          })
          emailInput = '' 
        }}>

        <input placeholder='Email' ref={ node => { emailInput = node }}/>
          <button className='btn' type='submit'>Recover</button>
          <span>{message}</span>
      </form>
    </div>    
  )
}

ForgotPassword = connect(mapStateToProps)(ForgotPassword)
export default ForgotPassword
