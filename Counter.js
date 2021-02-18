/*eslint-disable no-unused-vars */
import React, { Component, PropTypes, useEffect } from 'react'
import callApi from './api'
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => {
  const clicksomthing = () => {
    setState('change')
    console.log('works')
  }
  const [state, setState] = useState('hello')
  return (
    <div>
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      {' '}
      <button onClick={clicksomthing}>
        {state}
      </button>
      <hr />
      <div>
        Clicked: {value} times
      </div>
    </div>
  )
}


Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
