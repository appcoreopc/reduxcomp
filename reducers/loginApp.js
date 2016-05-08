import { combineReducers } from 'redux'

import login from './login'
import forgotpassword from './forgotpassword'
import awaiter from './awaiter'

const loginApp = combineReducers({
	login, awaiter,
	forgotpassword
})

export default loginApp