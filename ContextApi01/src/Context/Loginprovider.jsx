import React from "react";
import Logincontext from "./Logincontext";
import { useState } from "react";
export const Loginprovider =(props)=>{
    const [user,setuser]=useState("")
    return(
        <Logincontext.Provider value={{user,setuser}} >{props.children}</Logincontext.Provider>
    )
}

