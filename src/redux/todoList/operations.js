import axios from "axios";
import { isError, isLoading, refetchDataSuccess } from "./slice";

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