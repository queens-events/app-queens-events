import { combineReducers } from 'redux'
import auth from './auth'
import events from './events'

const queensEventsApp = combineReducers({
  auth,
  events,
})

export default queensEventsApp
