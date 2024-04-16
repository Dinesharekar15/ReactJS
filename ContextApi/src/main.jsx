import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Counterprovider } from './context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Counterprovider>
  <App />
  </Counterprovider>
  </>
    
    
  
)
