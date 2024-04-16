import React from 'react'

import { Countercontext } from '../context/CounterContext'

const Counter = () => {
  const counterstate = React.useContext(Countercontext)
  function increase(){
    if(counterstate.counter>19){
      return alert("Counter is greater than 20")
    }
    counterstate.setcounter(counterstate.counter+1)
  }
  function decrease(){
    if(counterstate.counter<1){
      return alert("Counter is less than 0")
    }
    counterstate.setcounter(counterstate.counter-1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">   
      <button onClick={increase} className="m-2">Increase</button>
      <button onClick={decrease} className="m-2">Decrease</button>
    </div>
  )
}

export default Counter
