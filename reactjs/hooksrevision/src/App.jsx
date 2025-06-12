import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContextExample from './ContextExample'
import UserCrud from './UserCrud'
// import Home from './Home'
// import Contact from './Contact'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))

function App() {

  const [cnt,setCnt] = useState(10)
  let a = useRef(25)
  const addCounter = ()=>{
      setCnt(cnt+1)
      a.current += 1
      console.log(a.current);
      
  }
  return (
   <div>
    {/* <ContextExample /> */}
      {/* <h3>Count is -- {cnt}</h3>
      <button onClick={addCounter}>Add</button>
      <h4>A is  -- {a.current}</h4> */}
      <UserCrud/>
      {/* <Suspense fallback={<div><h3>Plz wait.....</h3></div>}> 
          <Home />
      </Suspense>
      <Suspense fallback={<span><h2>Contact page is loading...</h2></span>}>
          <Contact />
      </Suspense> */}
   </div>
  )
  
}

export default App
