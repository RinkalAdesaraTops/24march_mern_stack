import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addFun, minusFun } from './reduxcounter/Counteraction';

const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
    const minusData =()=>{
        dispatch(minusFun())
    }
  return (
    <div>
      <h3>Count is -- {count}</h3>
      <button onClick={()=>dispatch(addFun())}>Add</button>
      <button onClick={minusData}>Minus</button>
    </div>
  )
}

export default CounterComponent
