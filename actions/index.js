export const doLogin = (loginInfo) => {
  return {
    	type: 'LOGIN', 
    	message : loginInfo.message,
    	url  : loginInfo.url, 
    	username : loginInfo.username,
    	password : loginInfo.password
  }
}

export const doForgotPassword = (loginInfo) => {
  console.log(loginInfo)
  return {
    	type: 'FORGOT_PASSWORD', 
    	email : loginInfo.email,
    	message : loginInfo.message
       }
}