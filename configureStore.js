import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import loginAppReducer from './reducers/loginApp'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
  return createStore(
    loginAppReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}