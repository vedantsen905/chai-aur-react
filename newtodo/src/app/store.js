import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/todofeature/todoSlice';

export const store = configureStore(
    {
        reducer : todoReducer
        
    }
)
