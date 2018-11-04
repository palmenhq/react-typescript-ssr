import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { HotApp } from './components/App'

const root = window.document.getElementById('app')

ReactDOM.hydrate(
  <BrowserRouter>
    <HotApp />
  </BrowserRouter>,
  root,
)
