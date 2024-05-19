import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoList/slice";
import { filterReducer } from "./filter/slice";


export const store = configureStore({
    reducer: {
        todolist: todoReducer,
        filter: filterReducer,
    },
    // Закриття devTools на продакшені
    // devTools: import.meta.env.MODE !== 'productions'
})