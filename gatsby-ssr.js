import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk'
import queensEventsApp from './src/reducers'

import createStore from './src/state/createStore'

exports.replaceRenderer = ({ 
    bodyComponent,
    replaceBodyHTMLString
}) => {

    const store = createStore()

    const ConnectedBody = () => (
        <Provider store={store}>
            {bodyComponent}
        </Provider>
    )

    // return {
    //     body: renderToString(<ConnectedBody/>),
    // }

    replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}