import React, { useState } from 'react'
import { useTodo } from '../Context/Todocontext'

function TodoForm() {
    const [todo,settodo]=useState("")
    const {addtodo,deleteall}=useTodo()

    function add(e){
        e.preventDefault()
        if (!todo) return alert("add task")

        addtodo({todo ,completed:false})
        
        settodo("")
    }


    return (

        <>
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className=" mr-1 w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
            />
            <button type="submit" className="  rounded-lg px-8 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>


        <div className="flex justify-between">

           <button className="mt-3 rounded-lg px-3 py-1 bg-blue-700 text-white shrink-0" >Filter</button>

          <button className="mt-3 rounded-lg px-3 py-1 bg-red-400 text-white shrink-0" onClick={deleteall}>Delete All</button>
          
        </div>
        

            </>
        
    );
}

export default TodoForm;

