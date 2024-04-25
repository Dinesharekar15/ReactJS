import { createSlice ,nanoid} from "@reduxjs/toolkit";


const initialState={
    todos:[]
}

const todoslice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo: (state, action) => {
            console.log(state.todos)
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        deletall:(state)=>{
            state.todos=[]
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
    

})

export const { addtodo,removetodo,deletall}=todoslice.actions 

export default todoslice.reducer