import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'

const LoginApp = ({dispatcher}) => (
  <div>
 	<Login/>
  </div>
)

LoginApp = connect(mapStateToProps)(Login)
export default LoginApp