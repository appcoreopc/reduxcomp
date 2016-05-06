import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import loginApp from './reducers/loginApp'
import LoginApp from './components/LoginApp'

let store = createStore(loginApp)

render(
  <Provider store={store}>
    <LoginApp />
  </Provider>,
  document.getElementById('signin')
)
