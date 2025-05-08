import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'

function App() {
  return (
    <>
      <div>
        {/* <LifecycleClass name="Rinkal" /> */}
        <LifecycleFunction name="Rinkal"/>
      </div>
    </>
  )
}

export default App
