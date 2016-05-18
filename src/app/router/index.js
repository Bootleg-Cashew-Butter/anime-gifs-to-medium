import React from 'react'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import App from 'app/pods/App'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const AppRouter = () => (
  <Router history={appHistory}>
    <Route path='/' component={App} />
  </Router>
)

export default AppRouter
