import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import configureStore from './configureStore'
import Slider from './components/Slider'

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

render(
  <Provider store={store}>
    <Slider timeout={500} repeat='continous' />
  </Provider>,
  document.getElementById('slider')
)






