import { ADD_DATA, DELETE_DATA, EDIT_DATA, GET_DATA } from './types'
import {api} from '../api/api'

export const AddData = (title, description) => async (dispatch) => {
    dispatch({type: ADD_DATA})
    await api.post('/data/', {
        title,
        description
    }).then((res)=>{
        localStorage.setItem('access_token' ,   res.data.token)
        dispatch( getData() );
    })
}

export const getData = () => async (dispatch) =>{
    await api.get('/data/').then((res)=>{
        dispatch({ 
            type: GET_DATA, 
            payload: {
                data: res.data
        }});
    }).catch((error) => {
        console.log(error)
    })
    
}

export const DeleteData = (id) => async (dispatch) => {
    dispatch({type: DELETE_DATA})
    await api.delete(`/data/${id}`).then((res)=>{
        dispatch( getData() );
    }).catch((error) => {
        console.log(error)
    })
}

export const EditData = (id, title, description) => async (dispatch) => {
    dispatch({type: EDIT_DATA})
    await api.put(`/data/${id}`, {title, description}).then((res)=>{
        localStorage.setItem('access_token', res.data.token)
        dispatch( getData() );
    }).catch((error) => {
        console.log(error)
    })
}