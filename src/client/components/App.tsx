import * as React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import { store } from '../state/store'
import { GlobalStyles } from '../utils/GlobalStyles'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../routes'

export const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyles />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  </Provider>
)

export const HotApp = hot(module)(App)
