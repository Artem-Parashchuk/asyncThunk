import axios from "axios";
import { addTodo, deleteTodo, isError, isLoading, refetchDataSuccess } from "./slice";

axios.defaults.baseURL = 'https://6649d3994032b1331beeebaf.mockapi.io/'

export const fetchTodosThunk = () => {
    return async dispatch => {
        try {
            dispatch(isLoading(true))
            dispatch(isError(false))
            const { data } = await axios.get('/Todos')
            dispatch(refetchDataSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(isError(true))
        } finally {
            dispatch(isLoading(false))
        }
    }
}

export const deleteTodoThunk = (id) => {
    return async dispatch => {
        try {
            dispatch(isLoading(true))
            await axios.delete(`/Todos/${id}`)
            dispatch(deleteTodo(id))
        } catch (error) {
            dispatch(isError(true))
        } finally {
            dispatch(isLoading(false))
        }
    }
}

export const addTodoThunk = body => {
    return async dispatch => {
        try {
            dispatch(isLoading(true))
            const { data } = await axios.post("/Todos", body)
            dispatch(addTodo(data))
        } catch (error) {
            dispatch(isError(true))
        } finally {
            dispatch(isLoading(false))
        }
    }
}