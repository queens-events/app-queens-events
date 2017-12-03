import { combineReducers } from 'redux'
import auth from './auth'

const queensEventsApp = combineReducers({
  auth,
})

export default queensEventsApp