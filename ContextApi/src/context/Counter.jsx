import { createContext,useState } from "react";


export const countercontext=createContext(null);

export const counterprovider= (props)=>{
    return <countercontext.Provider>{props.children}</countercontext.Provider>
}