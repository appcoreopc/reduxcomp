import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from "../actions"

const mapStateToProps = (state, ownProps) => {
  console.log(state)
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

  console.log(url)
  console.log(message)
  console.log(username)
  console.log(password)

	return (

	 <div>
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

