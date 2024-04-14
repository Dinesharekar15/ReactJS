import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home'
import './index.css'
import Github,{githubloder} from './components/Github.jsx'



import Layout from './components/layout'
import Contactus from './components/contactus'
import Aboutus from './components/aboutus'
import User from './components/User'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';



// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/contact",
//         element:<Contactus/>
//       },
//       {
//         path:"/about",
//         element:<Aboutus/>
//       }
//     ]

    
//   },


// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="user/:userid" element={<User />} />
      <Route
      loader={githubloder}
      path="github" 
      element={<Github />} />

    </Route>,
  ),
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
