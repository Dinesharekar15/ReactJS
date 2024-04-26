import { useEffect, useState } from 'react'
import { Todoprovider } from './Context/Todocontext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import './App.css'
 
function App() {
  const [todos, settodos] = useState([])

  const addtodo =(todo)=>{
    console.log(todo)
      
      settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const edittodo=(id,todo)=>{
    settodos((prev)=>prev.map((target)=>target.id===id?todo:target))
  }
  
  const remove=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }
  
  const toggelcomplete=(id)=>{
    settodos((prev)=>prev.map((task)=>task.id===id?{...task,completed :!task.completed}:task))
  }
  const deleteall=()=>{
    settodos([])
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos,addtodo,edittodo,remove,toggelcomplete,deleteall}}>
     <div className="bg-[#172842] min-h-screen py-8 w-full ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem  todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
