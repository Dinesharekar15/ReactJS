import { useEffect, useState } from 'react'
import { Todoprovider } from './Context/Todocontext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import './App.css'

function App() {
  const [todos, settodos] = useState([])

  const addtodo =(todo)=>{
      settodos((prev)=>[{id:Date.now(),todo},...prev])
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

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    
    if (storedTodos) {
        try {
            const parsedTodos = JSON.parse(storedTodos);
            if (Array.isArray(parsedTodos)) {
                settodos(parsedTodos);
            } else {
                console.error("Stored todos is not an array:", parsedTodos);
            }
        } catch (error) {
            console.error("Error parsing stored todos:", error);
        }
    }
}, []);


  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos,addtodo,edittodo,remove,toggelcomplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
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
