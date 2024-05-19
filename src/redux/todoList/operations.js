// operations.js
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6649d3994032b1331beeebaf.mockapi.io/'

export const fetchTodosThunk = createAsyncThunk('Todos/FetchAll', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('Todos')
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteTodoThunk = createAsyncThunk('Todos/Delete', async (id, thunkApi) => {
    try {
        await axios.delete(`Todos/${id}`)
        return id
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addTodoThunk = createAsyncThunk('Todos/Add', async(body, thunkApi) => {
    try{
        const {data} = await axios.post('Todos', body)
        return data
    }catch(error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const toggleTodoThunk = createAsyncThunk('Todos/Toggle', async(id, thunkApi) => {
    try {
        const { data } = await axios.put(`Todos/${id}/toggle`)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const likeTodoThunk = createAsyncThunk('Todos/Like', async(id, thunkApi) => {
    try {
        const { data } = await axios.put(`Todos/${id}/like`)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
