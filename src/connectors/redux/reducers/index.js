import { combineReducers } from 'redux'

import auth from './auth'
import events from './events'

const reducer = combineReducers({
  auth,
  events,
})

export default reducer
