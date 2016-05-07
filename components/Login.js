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
	//let username
	//let password

  console.log(url)
  console.log(message)
  console.log(username)
  console.log(password)

	return (

	 <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(doLogin({
            username : username, 
            password : password, 
            url : 'secret', 
            message : 'no mesage'
          }))
          username = '' 
          password = '' 
        }}>

        <input placeholder='Username' />
        <input placeholder='Password' />

        {url}

        <button type="submit">Login</button>
      </form>
    </div>		
	)
}

Login = connect(mapStateToProps)(Login)
export default Login

