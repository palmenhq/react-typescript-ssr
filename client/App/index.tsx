import * as React from 'react'
import { Provider } from 'react-redux'

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
