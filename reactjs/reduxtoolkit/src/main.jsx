import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import CounterStore from './RTK/CounterStore.js'
import UserStore from './CrudRTK/UserStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={UserStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
