import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter, setCount] = useState(0)

  const addValue = () => {
    const newcounter=counter+1;
    if(newcounter>20){
      alert("Counter can't be greater than 20")
      return;
    }
    setCount(newcounter)
  }
  
   const removeValue = () => {
    const newcounter=counter-1;
    if(newcounter<0){
      alert("Counter can't be negative")
      return;
    }

    setCount(newcounter)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Increaze</button>
      <button onClick={removeValue}>Decrease</button>

    </>
  )
}

export default App
