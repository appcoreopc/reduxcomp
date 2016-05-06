import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from "../actions"

let Login = ({dispatch}) => 
{
	let username
	let password

	return (

	 <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(doLogin({
          username : username, 
          password : password, 
          url : 'secret'
        }))
          username = '' 
          password = '' 
        }}>

        <input value={username} placeholder='Username' />

        <input value={password} placeholder='Password' />

        <button type="submit">Login</button>
      </form>
    </div>		
	)
}

Login = connect()(Login)
export default Login

