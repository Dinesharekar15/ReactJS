import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  
  return (
    <>
      <h1 class="bg-green-400 text-3xl font-bold">
        Dinesh 
      </h1>
      <Card username="rohan" job="frontend developer" image="./public/rohan.jpg.jpg"/>
      <Card username="Dinesh" image="./public/a9p45g.jpg"/>

      
    </>
  )
}

export default App
