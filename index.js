import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import HelloComponent from './components/HelloComponent'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

function render() {

  store.dispatch({ type: 'HELLO' })
  ReactDOM.render(
    <HelloComponent/>,
    rootEl  
  )
}

render()
store.subscribe(render)
