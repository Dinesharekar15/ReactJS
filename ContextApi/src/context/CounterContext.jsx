import { createContext,useState } from "react";


export const Countercontext=createContext(null);
  
export const Counterprovider= (props)=>{

    const [counter,setcounter]=useState(0);
    return <Countercontext.Provider value={{counter,setcounter}}>{props.children}</Countercontext.Provider>
}