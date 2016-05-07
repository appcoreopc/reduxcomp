import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from "../actions"

const mapStateToProps = (state, ownProps) => {
  return {
    url : state.login.url,
    message : state.login.message, 
    username : state.login.username, 
    password : state.login.password
  }
}

let Login = ({dispatch, url, message, password, username}) => 
{
	let usernameInput
	let passwordInput

  return (

	 <div className='loginBox'>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(doLogin({
            username : usernameInput.value, 
            password : passwordInput.value, 
            url : 'secret', 
            message : 'no mesage'
          }))
          username = '' 
          password = '' 
        }}>

        <input placeholder='Username' ref={ node => { usernameInput = node }} />
        <input placeholder='Password' ref={ node => { passwordInput = node }}/>

        {url}

        <button type="submit">Login</button>
      </form>
    </div>		
	)
}

Login = connect(mapStateToProps)(Login)
export default Login

