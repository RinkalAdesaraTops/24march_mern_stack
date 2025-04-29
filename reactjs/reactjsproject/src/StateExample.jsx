import React, { useState } from 'react'
import './Custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form,Stack } from 'react-bootstrap';
// import Stack from 'react-bootstrap/Stack';
const StateExample = () => {
    //hooks
    let [count,setCount] = useState(0)
    const addCounter = ()=>{
        setCount(count+1)
    }
    const myStyle = {
        color:'aqua',
        backgroundColor:'grey'
    }
  return (
    <div>
      <h3 style={{color:'red',backgroundColor:'yellowgreen'}}>Count is -- {count}</h3>
      <button onClick={addCounter} className='btn btn-primary'>Add</button>
      <button onClick={()=>setCount(count-1)}>Minus</button>
      <h4 style={myStyle}>Text dfgedhj </h4>
      <div className='box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem debitis excepturi </div>
      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
<Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>
  )
}

export default StateExample
