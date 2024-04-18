import { createContext,useContext } from "react";


export const Todocontext=createContext({
    
})

export const Todoprovider=Todocontext.Provider

export function useTodo(){
    const context =useContext(Todocontext)
}