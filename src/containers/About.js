
import React from 'react'
// import { connect } from 'react-redux'

// const Counter = ({ count, increment, reset }) => (
//   <div>
//     <p>Value: {count}</p>
//     <button onClick={increment}>Increment</button>
//     <button onClick={reset}>Reset</button>
//   </div>
// )
// // Connexion with redux
// const CounterConnected = connect(
//   ({ counter: { count } }) => ({ count }),
//   dispatch => ({
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     reset: () => dispatch({ type: 'RESET' }),
//   }),
// )(Counter)

const About = () => (
  <div>
    <h1>This is what we're all about.</h1>
    <p>
      React, static sites, performance, speed. It's the stuff that makes us
      tick.
    </p>
  </div>
)

export default About
