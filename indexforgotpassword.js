import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import loginApp from './reducers/loginApp'
import ForgotPassword from './components/ForgotPassword'

let store = createStore(loginApp)

render(
  <Provider store={store}>
    <ForgotPassword />
  </Provider>,
  document.getElementById('root')
)








