import React, { useState } from 'react'
import {addtodo} from '../slice'
import { useDispatch } from 'react-redux'



const Addtodo = () => {
  const [todo,settodo]=useState('')
  const dispatch=useDispatch()
    function Add (e){
    e.preventDefault()

    if(!todo) return alert("add task")

    dispatch(addtodo(todo))
    settodo('')

  }


  return (
    <form  onSubmit={Add} className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e)=>settodo(e.target.value)}
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-gray-100 py-1.5"
    />
    <button type="submit" className="px-9 rounded-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
    </button>
</form>
  )
}

export default Addtodo
