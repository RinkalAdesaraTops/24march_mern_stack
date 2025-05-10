import React, { useState } from 'react'

const ContextExample = () => {
    const [name,setName] = useState("Testing")
  return (
    <div>
      <h3>Context Example</h3>
      <h4>Component 1 called...</h4>
      <h3>Name is -- {name}</h3> 
      //component composition
      <Component2 name={name}/>
    </div>
  )
}
const Component2 = ({name})=>{
    return(
        <div>
            <h4>Component 2 called...</h4>
            <Component3 name={name}/>
        </div>
    )
}
//props drilling
//props drilling is a process of passing data from parent to child component
const Component3 = ({name})=>{
    return(
        <div>
            <h4>Component 3 called...</h4>
            <Component4 name={name}/>

        </div>
    )
}
const Component4 = ({name})=>{
    return(
        <div>
            <h4>Component 4 called...</h4>
            <h4>Final Name -  {name}</h4>
        </div>
    )
}

export default ContextExample
