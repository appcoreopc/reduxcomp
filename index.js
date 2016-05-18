import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import configureStore from './configureStore'
import Slider from './components/Slider'
import InfoBox from './components/InfoBox'
import GettingStarted from './components/GettingStarted'


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
    <Slider width={400} height={400} timeout={500} repeat='continous' />
  </Provider>,
  document.getElementById('slider')
)

render(
  <Provider store={store}>
    <InfoBox 
    figcaptionText='Git blame- Caravaggio, Oil on canvas, circa 1607' 
    text='Download the official Android IDE and developer tools to build apps for Android phones, tablets, wearables, TVs, and more.'
     width={340} height={250} imageSrc='gitblame.jpg' url='http://www.google.com' urltext='145 votes'/>
  </Provider>,
  document.getElementById('infobox')
)

render(
  <Provider store={store}>
    <GettingStarted images={['pix.jpg', 'gitblame.jpg']}
    figcaptionText='Getting started guide.' 
    text={[
      'Download the official Android IDE and developer tools to build apps for Android phones, tablets, wearables, TVs, and more.',
      'Deep dive into Google Android N']}
     width={340} height={250} imageSrc='gitblame.jpg' url='http://www.google.com' urltext='145 votes'/>
  </Provider>,
  document.getElementById('getstarted')
)


