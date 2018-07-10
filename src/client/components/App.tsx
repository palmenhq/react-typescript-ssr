import * as React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import { store } from '../state/store'
import { AwesomeComponent } from '../components/AwesomeComponent'

export const App = () => (
  <Provider store={store}>
    <div>
      <AwesomeComponent />
    </div>
  </Provider>
)

export const HotApp = hot(module)(App)
