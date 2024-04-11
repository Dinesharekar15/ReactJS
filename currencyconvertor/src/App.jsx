import { useState } from 'react'
import {InputBox} from './Components'
import Currencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [Amount ,setAmount]=useState(0)
  const [From,setFrom]=useState("usd")
  const [To,setTo]=useState("inr")
  const [Convertamount,setConvertamount]=useState(0)
  
  const currencyinfo = Currencyinfo(From)
   
  const options  = Object.keys(Currencyinfo)

  function swap (){
     setFrom(To)
     setTo(From)
     setAmount(Convertamount)
     setConvertamount(Amount)
  }
  const convert= ()=>{
        
        setConvertamount(Amount * currencyinfo[To])
  }

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="FROM"
                        amount={Amount}
                        currencyoptions={options}
                        oncurrencytypechange={(amount)=>setAmount(amount)}
                        
                        selectcurrency={From}
                        onamountchange={(amount)=>setAmount(amount)}
                       
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                      label="TO"
                      amount={Convertamount}
                      oncurrencytypechange={(amount)=>setTo(amount)}
                      onamountchange={(amount)=>setConvertamount(amount)}
                      selectcurrency={To}
                      currencyoptions={options}
                    />
                </div>
                <button  type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {From.toUpperCase()} to {To.toUpperCase()}
                   
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
