import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom'
import queensEventsApp from './reducers'
import App from './components/App.jsx'

let store = createStore(
  queensEventsApp,
  { auth: { user: {}, errors: {} }},
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
