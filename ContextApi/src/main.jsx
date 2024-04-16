import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Counterprovider } from './context/CounterContext.jsx'
import {Contextprovider} from './context/Cardcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Contextprovider>
  <App />
  </Contextprovider>
  </>
    
    
  
)
