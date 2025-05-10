import React, { createContext, useContext,useState } from 'react'
const Userdata = createContext()
const UseContext = () => {
    const [name,setName] = useState("Testing")
  return (
    <div>
      <h3>Context Example</h3>
      <h4>Component 1 called...</h4>
      <h3>Name is -- {name}</h3> 
      {/* //component composition */}
      <Userdata.Provider value={name}>
            <Component2 />
      </Userdata.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return(
        <div>
            <h4>Component 2 called...</h4>
            <Component3 />
        </div>
    )
}

const Component3 = ()=>{
    return(
        <div>
            <h4>Component 3 called...</h4>
            <Component4 />

        </div>
    )
}
const Component4 = ()=>{
    let name = useContext(Userdata)
    return(
        <div>
            <h4>Component 4 called...</h4>
            <h4>Final Name -  {name}</h4>
        </div>
    )
}

export default UseContext
