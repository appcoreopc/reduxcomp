import fetch from 'isomorphic-fetch'

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

export const REQUEST_FORGOTPASSWORD = 'REQUEST_FORGOTPASSWORD'
export const RECEIVE_FORGOTPASSWORD = 'RECEIVE_FORGOTPASSWORD'

export const doLogin = (dispatch, loginInfo) => {
    getLogin(dispatch, loginInfo);
}

export const doForgotPassword = (dispatch, loginInfo) => {
  getForgetPassword(dispatch, loginInfo);
}

function requestLogin(loginInfo) {
  return {
    type: REQUEST_LOGIN,
    loginInfo
  }
}

function receiveLogin(loginInfo, json) {
return {
      type: 'LOGIN', 
      message : 'no message from us',
      url  : 'loginInfo.url', 
      username : 'jeremy',
      password : 'secret'
  }
}

function getLogin(dispatch, loginInfo) {

   dispatch(requestLogin(loginInfo))
   fetch('http://jsonplaceholder.typicode.com/posts/1')
   .then(response => console.log(response))
   .then(json => dispatch(receiveLogin(loginInfo, json)))
      //.then(response => response.json())
      //.then(json => dispatch(receiveLogin(loginInfo, json)))
}

function getForgetPassword(dispatch, loginInfo) {

   dispatch(requestForgotPassword(loginInfo))
   fetch('http://jsonplaceholder.typicode.com/posts/1')
   .then(response => console.log(response))
   .then(json => dispatch(receiveForgotPassword(loginInfo, json)))
      //.then(response => response.json())
      //.then(json => dispatch(receiveLogin(loginInfo, json)))
}

function requestForgotPassword(loginInfo) {
  return {
    type: REQUEST_FORGOTPASSWORD,
    loginInfo
  }
}

function receiveForgotPassword(loginInfo, json) {
  return {
       type: 'FORGOT_PASSWORD', 
        email : loginInfo.email,
        message : 'no forgot password message for the time being'
    }
}
