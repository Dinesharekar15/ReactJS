import React from 'react'
import {createContext,useContext}  from 'react'

export const Theamcontext=createContext({
    theammode:"light",
    lighttheam:()=>{},
    darktheam:()=>{},
})

export const Theamprovider=Theamcontext.Provider;

export default function useTheam(){
    const theam =useContext(Theamcontext)
    return theam
}

