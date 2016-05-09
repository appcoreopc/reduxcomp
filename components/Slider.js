import React from 'react'
import { connect } from 'react-redux'
//import { doForgotPassword } from "../actions"

//const mapStateToProps = (state, ownProps) => {
//  return {
//    email : state.forgotpassword.email, 
//    message : state.forgotpassword.message
//  }
//}

let Slider = ({dispatch, timeout, repeat}) => 
{
  console.log(timeout)
  console.log(repeat)

  let emailInput
  return (
     <div className='gridbox'>
        My first slider is out! 
    </div>    
  )
}

Slider = connect()(Slider)
export default Slider
