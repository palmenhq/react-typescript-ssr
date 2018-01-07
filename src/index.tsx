import 'nebula-css/nebula-css/_resets.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { App } from './App'

const root = window.document.getElementById('app')

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require<{ App: typeof App }>('./App').App

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root
    )
  })
}
