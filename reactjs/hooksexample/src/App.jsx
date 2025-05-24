import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'
import UseRefExample from './UseRefExample'
import ContextExample from './ContextExample'
import UseContext from './UseContext'
import EmpCrud from './EmpCrud'
import UsememoExample from './UsememoExample'
import Apiexample from './Apiexample'
import Apicrud from './Apicrud'

function App() {
  return (
    <>
      <div>
        {/* <LifecycleClass name="Rinkal" /> */}
        {/* <LifecycleFunction name="Rinkal"/> */}
        {/* <UseRefExample /> */}
        {/* <ContextExample /> */}
        {/* <UseContext /> */}
        {/* <UserCrud /> */}
        {/* <EmpCrud /> */}
        {/* <UsememoExample /> */}
        {/* <Apiexample /> */}
        <Apicrud/>
      </div>
    </>
  )
}

export default App
