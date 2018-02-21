import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk'
import queensEventsApp from './src/reducers'

import createStore from './src/state/createStore'

exports.replaceRouterComponent = ({ history }) => {
    const store = createStore()

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    )

    return ConnectedRouterWrapper
}