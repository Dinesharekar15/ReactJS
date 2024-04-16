import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

export const Cardcontext = createContext([])

export const useCard=()=>{
  const card =useContext(Cardcontext)
  return card
}


export const Contextprovider = (props) => {
  const [item,setitem]=useState([])
  return (
    <Cardcontext.Provider value={{item,setitem}}>
      {props.children}
    </Cardcontext.Provider>
  )
}


