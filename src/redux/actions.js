import { ADD_DATA, DELETE_DATA, EDIT_DATA } from './types'

export const AddData = (data) => {
    return {
        type: ADD_DATA,
        payload: data
    }
}

export const DeleteData = (id) => {
    return {
        type: DELETE_DATA,
        payload: id
    }
}

export const EditData = (data) => {
    return{
        type: EDIT_DATA,
        payload: data
    }
}