// slice.js
import { createSlice } from "@reduxjs/toolkit"
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk, toggleTodoThunk, likeTodoThunk } from "./operations"

const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
}

const slice = createSlice({
    name: 'todolist',
    initialState,
    selectors: {
        selectTodos: state => state.todos,
        selectIsLoading: state => state.isLoading,
        selectIsError: state => state.isError
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodosThunk.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
                state.todos = payload
                state.isLoading = false
            })
            .addCase(fetchTodosThunk.rejected, state => {
                state.isError = true
                state.isLoading = false
            })
            .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
                state.todos = state.todos.filter(item => item.id !== payload)
                state.isLoading = false
            })
            .addCase(deleteTodoThunk.pending, state => {
                state.isLoading = true
            })
            .addCase(deleteTodoThunk.rejected, state => {
                state.isError = true
                state.isLoading = false
            })
            .addCase(addTodoThunk.fulfilled, (state, { payload }) => {
                state.todos.push(payload)
                state.isLoading = false
            })
            .addCase(addTodoThunk.pending, state => {
                state.isLoading = true
            })
            .addCase(addTodoThunk.rejected, state => {
                state.isError = true
                state.isLoading = false
            })
            .addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
                const todo = state.todos.find(item => item.id === payload.id)
                if (todo) {
                    todo.completed = payload.completed
                }
                state.isLoading = false
            })
            .addCase(toggleTodoThunk.pending, state => {
                state.isLoading = true
            })
            .addCase(toggleTodoThunk.rejected, state => {
                state.isError = true
                state.isLoading = false
            })
            .addCase(likeTodoThunk.fulfilled, (state, { payload }) => {
                const todo = state.todos.find(item => item.id === payload.id)
                if (todo) {
                    todo.liked = payload.liked
                }
                state.isLoading = false
            })
            .addCase(likeTodoThunk.pending, state => {
                state.isLoading = true
            })
            .addCase(likeTodoThunk.rejected, state => {
                state.isError = true
                state.isLoading = false
            })
    }
})

export const todoReducer = slice.reducer
export const { selectTodos, selectIsLoading, selectIsError } = slice.selectors
