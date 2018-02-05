import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

if (typeof window === 'undefined') {
  global.window = {}
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  // {}, // initial state
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  { auth: { user: {}, errors: {} } },
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)
/* eslint-enable */

export default store
