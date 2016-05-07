import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import configureStore from './configureStore'

let store = configureStore()

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('signin')
)

render(
  <Provider store={store}>
    <ForgotPassword />
  </Provider>,
  document.getElementById('forgot')
)








