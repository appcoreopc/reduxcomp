export const doLogin = (loginInfo) => {
  return {
    type: 'LOGIN', 
    state : loginInfo
  }
}
