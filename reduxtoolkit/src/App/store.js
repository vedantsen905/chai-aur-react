import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/todofeature/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer, // <-- Assigning a slice name
    }
});

export default store; // <-- Export as default
