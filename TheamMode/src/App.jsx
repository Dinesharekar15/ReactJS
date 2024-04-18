
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { Theamprovider } from './Context/Theamcontext'
import Theambtn from './Components/Theambtn'

function App() {
  const [theammode,settheammode]=useState()
  function lighttheam(){
    settheammode("light")
  }
  function darktheam(){
    settheammode("dark")
  }
   useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theammode)
   },[theammode])

  return (
    <Theamprovider value={{theammode,lighttheam,darktheam}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     <Theambtn/>   
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </Theamprovider>
  )
}

export default App
