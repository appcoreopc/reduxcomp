import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import HelloComponent from './components/HelloComponent'
import SignIn from './components/SignIn'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const signin = document.getElementById('signin')

function render() {

  ReactDOM.render(
    <HelloComponent/>,
    rootEl  
  )

  ReactDOM.render(
    <SignIn/>,
    signin  
  )


}



render()
store.subscribe(render)
