import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './rootEpic'
import { rootReducer } from './rootReducer'

let middleware
if ((window as any)['__REDUX_DEVTOOLS_EXTENSION__']) {
  middleware = compose(
    applyMiddleware(createEpicMiddleware(rootEpic)),
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']()
  )
} else {
  middleware = applyMiddleware(createEpicMiddleware(rootEpic))
}

export const store = createStore(
  rootReducer,
  middleware
)
