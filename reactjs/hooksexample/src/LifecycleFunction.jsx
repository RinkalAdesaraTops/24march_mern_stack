import React, { useEffect, useState } from 'react'

const LifecycleFunction = (props) => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(11)
        },2000)
    })
  return (
    <div>
        <h3>Count-- {count}</h3>
        <h4>Name is -- {props.name}</h4>
    </div>
  )
}

export default LifecycleFunction
