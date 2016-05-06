import { combineReducers } from 'redux'
import login from './login'
import forgotpassword from './forgotpassword'

const loginApp = combineReducers({
	login, 
	forgotpassword
})

export default loginApp