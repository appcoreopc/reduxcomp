  import fetch from 'isomorphic-fetch'

  export const REQUEST_LOGIN = 'REQUEST_LOGIN'
  export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
  export const LOGIN = 'LOGIN'

  export const FORGOTPASSWORD = 'FORGOT_PASSWORD'
  export const AWAITER = 'AWAIT'

  export function getDoLogin(dispatch, loginInfo) 
  {
      //return (dispatch, getState) => {
      dispatch(passlogin(loginInfo)) 
      dispatch(requestAwait())   
      fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then(response =>  { 
        console.log(response)  
      })
      .then(json => { 
        dispatch(requestNoWait()) 
        dispatch(receiveLogin(json)) 
      })
      //getLogin(dispatch);
      //}
  }

  function passlogin(loginInfo)
  {
    return {
      type : LOGIN,
      message : loginInfo.message,
      url  : loginInfo.url, 
      username : loginInfo.username,
      password : loginInfo.password, 
      isPending : loginInfo.isPending
    }
  }

  function getLogin(dispatch) { 

      dispatch(requestAwait())   
      dispatch(requestAwait())   
      fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then(response =>  { 
        //console.log(response)  
      })
      .then(json => { 
        dispatch(receiveLogin(json)) 
        dispatch(requestNoWait()) 
      })
        //.then(response => response.json())
        //.then(json => dispatch(receiveLogin(loginInfo, json)))
  }

      export const doLogin = (dispatch, loginInfo) => {
        getLogin(dispatch, loginInfo);
      }

      export const doForgotPassword = (dispatch, loginInfo) => {
        getForgetPassword(dispatch, loginInfo);
      }

      export function requestAwait()  {
        return  {
         type : 'AWAITER',
         isPending : true 
       }
     }

     export function requestNoWait() {
      console.log('requestnowait')
      return  {
       type : 'AWAITER',
       isPending : false
     }
   }

   function requestLogin(loginInfo) {
    return {
      type: LOGIN,
      message : loginInfo.message,
      url  : loginInfo.url, 
      username : loginInfo.username,
      password : loginInfo.password
    }
  }

  function receiveLogin(json) {
    return {
      type: LOGIN, 
      message : 'not integrated to backend at the moment.',
      url  : 'loginInfo.url', 
      username : 'jeremy',
      password : 'secret', 
      isPending : false
    }
  }

  function getForgetPassword(dispatch, loginInfo) {

   dispatch(requestForgotPassword(loginInfo))
   dispatch(requestAwait())
   fetch('http://jsonplaceholder.typicode.com/posts/1')
   .then(response => console.log(response))
   .then(json => { 
        dispatch(requestNoWait())
        dispatch(receiveForgotPassword(loginInfo, json))
    })
        //.then(response => response.json())
        //.then(json => dispatch(receiveLogin(loginInfo, json)))
 }

function requestForgotPassword(loginInfo) {
        return {
          type: FORGOTPASSWORD,
          email : loginInfo.email, 
          message : loginInfo.message
        }
}

function receiveForgotPassword(loginInfo, json) {
   return {
         type: FORGOTPASSWORD, 
         email : loginInfo.email,
         message : 'not integrated to backend at the moment.'
       }
}