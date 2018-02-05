import { combineReducers } from 'redux'

import counter from './counter'
import auth from './auth'
import events from './events'

const reducer = combineReducers({
  auth,
  events,
  counter,
})

export default reducer
