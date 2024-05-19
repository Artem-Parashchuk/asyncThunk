import { createSlice, nanoid } from "@reduxjs/toolkit"
import { deleteTodoThunk, fetchTodosThunk } from "./operations"
// Створюємо початковий стан
const initialState = {
    todos: [],
    isLoading: false,
    isError: false,

}
// Створюємо слайс
const slice = createSlice({
    // Даємо ім'я (має спіівпадати з назвою в сторі )
    name: 'todolist',

    // Передаємо початковий стан
    initialState,

    // Створюємо селектори прямо в слайсі
    selectors: {
        selectTodos: state => state.todos,
        selectIsLoading: state => state.isLoading,
        selectIsError: state => state.isError
    },

    // Створюємо редюсери(екшени)
    // reducers: {
    //     deleteTodo: (state, action) => {
    //         state.todos = state.todos.filter(todo => todo.id !== action.payload)
    //     },
    //     toggleTodo: (state, action) => {
    //         const item = state.todos.find(todo => todo.id === action.payload)
    //         if (item) {
    //             item.completed = !item.completed
    //         }
    //     },
    //     likeTodo: (state, action) => {
    //         const item = state.todos.find(item => item.id === action.payload)
    //         if (item) {
    //             item.liked = !item.liked
    //         }
    //     },
    //     // Підготовка пейлоада відбувається таким чином
    //     // Спочатку викликається prepare
    //     // ПОтім викликається reducer
    //     addTodo: {
    //         prepare: todo => {
    //             return {
    //                 payload: {
    //                     ...todo,
    //                     id: nanoid(),
    //                     completed: false,
    //                     liked: false
    //                 }
    //             }
    //         },
    //         reducer: (state, action) => {
    //             state.todos.push(action.payload)
    //         }
    //     },
    //     refetchDataSuccess: (state, action) => {
    //         state.todos = action.payload
    //         state.isLoading = false
    //     },
    //     isError: (state, action) => {
    //         state.isError = action.payload
    //     },
    //     isLoading: (state, action) => {
    //         state.isLoading = action.payload
    //     },
    // },
    extraReducers: builder => {
        builder
            .addCase(fetchTodosThunk.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
                state.todos = payload
                state.isLoading = false
            })
            .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
                state.todos = state.todos.filter(item => item.id !== payload)
                state.isLoading = false
            })
            .addCase(deleteTodoThunk.pending, state => {
                state.isLoading = true
            })
    }
})
// Експорт редюсера (його стан, логіка)
export const todoReducer = slice.reducer
// Експорт екшенів - того, що написано в реюсерах
// export const { deleteTodo, toggleTodo, likeTodo, addTodo, refetchDataSuccess, isError, isLoading } = slice.actions;

// Експорт селекторів
export const { selectTodos, selectIsLoading, selectIsError } = slice.selectors