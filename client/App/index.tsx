import * as React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import css from './style.scss'
import { store } from '../state/store'
import { AwesomeComponent } from '../components/AwesomeComponent/index'

export const App = () => (
  <Provider store={store}>
    <div className={css.text}>
      <AwesomeComponent />
    </div>
  </Provider>
)

export const HotApp = hot(module)(App)
