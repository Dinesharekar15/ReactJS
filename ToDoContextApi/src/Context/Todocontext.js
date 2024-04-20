import { createContext,useContext } from "react";


export const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"",
            completed:false,
            
        }
    ], 
    addtodo:(todo)=>{},
    edittodo:(id,todo)=>{},
    remove:(id)=>{},
    toggelcomplete:(id)=>{}

})

export const Todoprovider=Todocontext.Provider

export function useTodo(){
   return useContext(Todocontext)
   
}