import React from 'react'
import { connect } from 'react-redux'
import { getDoLogin } from "../actions"

const mapStateToProps = (state, ownProps) => {
  return {
    url : state.login.url,
    message : state.login.message, 
    username : state.login.username, 
    password : state.login.password, 
    isPending : false
  }
}

let Login = ({dispatch, url, message, password, username, isPending }) => 
{
	let usernameInput
	let passwordInput
  console.log('my message ' + message)
  
 return (

 <div className='gridbox'>
     <form onSubmit={e => {
        e.preventDefault()
            getDoLogin(dispatch, {
            username : usernameInput.value, 
            password : passwordInput.value, 
            url : 'secret', 
            message : 'no mesage',
            isPending : false
          })
          username = '' 
          password = '' 
        }}>

        <input placeholder='Username' ref={ node => { usernameInput = node }} />
        <input placeholder='Password' ref={ node => { passwordInput = node }}/>
          <button type="submit">Login</button>
          <span>{message}</span>

     </form>
    </div>		
	)
}

Login = connect(mapStateToProps)(Login)
export default Login
