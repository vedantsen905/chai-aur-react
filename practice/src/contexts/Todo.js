import React from 'react'
import { useContext, createContext } from 'react'

export const TodoContext = createContext({
    todos : [ {
        id: 1,
        todo : "Write a task", 
        completed : false

    }

], 

addTodo : (todo) => {},
updateTodo: (id, todo) => {},
deleteTodo: (id) => {}


})



export const UseTodo = () => {
    return useContext(TodoContext)
}  


export const TodoProvider = TodoContext.Provider

