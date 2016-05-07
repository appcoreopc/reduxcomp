export const doLogin = (loginInfo) => {
  return {
    type: 'LOGIN', 
    message : loginInfo.message,
    url  : loginInfo.url, 
    username : loginInfo.username,
    password : loginInfo.password

  }
}
