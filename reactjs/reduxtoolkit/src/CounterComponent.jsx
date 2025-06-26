import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './RTK/CounterReducer'

const CounterComponent = () => {
    const count = useSelector((i)=>i.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Counter is -- {count}</h3>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default CounterComponent
