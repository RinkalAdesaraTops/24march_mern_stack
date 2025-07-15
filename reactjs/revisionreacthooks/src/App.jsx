import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form } from 'react-bootstrap'

function App() {
  const [light, setLight] = useState(0)
  const name="Rinkal"
  return (
    <>
      <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={light == 0 ?'Light OFF':'Light ON'}
        name='light'
        onClick={()=>setLight(!light)}
      />
      {light == 0?'':name}

      ab== abc abx
    </Form>
    </>
  )
}

export default App
