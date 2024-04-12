import {Outlet} from "react-router-dom"

import Header from "./header/header"
import Footer from "./footer/footer"
import React from 'react'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout


