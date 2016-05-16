import React from 'react'
import {render} from 'react-dom'
// import {Provider} from 'react-redux'
// import store from './store'
import AppRouter from './router'
import './theme/index.styl'

render(
  <AppRouter/>,
  document.getElementById('app')
)