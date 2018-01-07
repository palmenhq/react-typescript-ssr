import * as React from 'react'
import { Provider } from 'react-redux'

import css from './App.scss'
import { store } from './state/store';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className={css.text}>it works</div>
      </Provider>
    )
  }
}
