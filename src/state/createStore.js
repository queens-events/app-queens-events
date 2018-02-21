import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk'
import queensEventsApp from '../reducers'

const createStore = () => reduxCreateStore(
    queensEventsApp,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)

export default createStore