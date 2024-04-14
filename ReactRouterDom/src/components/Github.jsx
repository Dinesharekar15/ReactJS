import React from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data =useLoaderData()
//    const [data,setData]=useState([]);
//    fetch("https://api.github.com/users/Dinesharekar15")
//    .then((res)=>res.json())
//    .then((data)=>{
//     console
//      setData(data);
//    })


  return (
    <div className='text-center bg-orange-400 text-3xl flex justify-center items-center h-full flex-col' >
      <img className='w-30 h-30 rounded-full border  border-orange-400 hover:border-white p-2 transition duration-300' src={data.avatar_url} alt="profile pic" />
      <h1 className='text-white'>Username: {data.login} <br />   Followers:{data.followers}</h1>

    </div>
  )
}



 const githubloder = async()=>{
    
    
    const res=await fetch("https://api.github.com/users/Dinesharekar15")
    
    return res.json();
}
export default Github
export {githubloder}

