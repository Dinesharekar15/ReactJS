import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home'

import Layout from './components/layout'
import Contactus from './components/contactus'
import Aboutus from './components/aboutus'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contactus/>
      },
      {
        path:"/about",
        element:<Aboutus/>
      }
    ]

    
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
