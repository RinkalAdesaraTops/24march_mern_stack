import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'
import UseRefExample from './UseRefExample'
import ContextExample from './ContextExample'
import UseContext from './UseContext'
import UserCrud from './UserCrud'

function App() {
  return (
    <>
      <div>
        {/* <LifecycleClass name="Rinkal" /> */}
        {/* <LifecycleFunction name="Rinkal"/> */}
        {/* <UseRefExample /> */}
        {/* <ContextExample /> */}
        {/* <UseContext /> */}
        <UserCrud />
      </div>
    </>
  )
}

export default App
