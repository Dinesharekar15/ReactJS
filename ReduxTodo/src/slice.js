import { createSlice ,nanoid} from "@reduxjs/toolkit";


const initialstate={
    todos:[{
        id:1,
        text:"task"
    }]
}

const todoslice=createSlice({
    name:"todo",
    initialstate,
    reducers:{
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
    

})

export const { addtodo,removtodo}=todoslice.actions 

export default todoslice.reducer