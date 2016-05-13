import React from 'react'
import { connect } from 'react-redux'
//import { doForgotPassword } from "../actions"

//const mapStateToProps = (state, ownProps) => {
//  return {
//    email : state.forgotpassword.email, 
//    message : state.forgotpassword.message
//  }
//}

let Slider = ({dispatch, image, header, content, link}) => 
{

  let emailInput
  return (
     <div className='gridbox'>
        <li>
        	<img src="{image}" />
        </li>
        <li>
        	{header} />
        </li>

        <li>
        	{content} />
        </li>

        <li>
        	{link}
        </li>

    </div>    
  )
}

Slider = connect()(Slider)
export default Slider
