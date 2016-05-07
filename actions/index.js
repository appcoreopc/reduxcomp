import fetch from 'isomorphic-fetch'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

export const doLogin = (dispatch, loginInfo) => {
    console.log('dologin')
    getLogin(dispatch, loginInfo);
}

export const doForgotPassword = (loginInfo) => {
  console.log(loginInfo)
  return {
    	type: 'FORGOT_PASSWORD', 
    	email : loginInfo.email,
    	message : loginInfo.message
       }
}


function requestLogin(loginInfo) {

  console.log('requestlogin shout out!')
  return {
    type: REQUEST_LOGIN,
    loginInfo
  }
}

function receiveLogin(loginInfo, json) {

  console.log('RECEIVE_LOGIN shout out!')

  return {
      type: 'LOGIN', 
      message : 'no message from us',
      url  : 'loginInfo.url', 
      username : 'jeremy',
      password : 'secret'
  }
}

function getLogin(dispatch, loginInfo) {

  console.log('getlogin')
  
   dispatch(requestLogin(loginInfo))

   fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response))
    .then(json => dispatch(receiveLogin(loginInfo, json)))
      //.then(response => response.json())
      //.then(json => dispatch(receiveLogin(loginInfo, json)))
  
}
