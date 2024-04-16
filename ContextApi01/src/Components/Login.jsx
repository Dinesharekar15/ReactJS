import React from 'react'
import { useState } from 'react'
import Logincontext from '../Context/Logincontext'
import { useContext } from 'react'
const Login = () => {
    const {setuser} =useContext(Logincontext)
    

    const [username,setusername ]=useState()
    const [password,setpassword]= useState()
    const handelsubmit =(e)=>{
        e.preventDefault()
        setuser({username,password})
        
    }
  return (
    <div>
      <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" placeholder='username' />
      <br />
      <input value={password} onChange={(e)=>setpassword(e.target.value)} type="text"placeholder='Password' />
      <br />
      <button  onClick={handelsubmit}> SUBMIT</button>
    </div>
  )
}

export default Login
