import React,{useRef, useState} from 'react'

const UseRefExample = () => {
    const [count,setCount] = useState(0)
    let a = useRef(10) //without state manage -- actual DOM direct rerender 
    const addCounter = () => {
        setCount(count+1)
        a.current = a.current + 1
        console.log(a);
        
    }

  return (
    <div>
        <h3>Count is -- {count}</h3>
        <h3>A is -- {a.current}</h3>
        <button onClick={addCounter}>Add</button>
    </div>
  )
}
export default UseRefExample
