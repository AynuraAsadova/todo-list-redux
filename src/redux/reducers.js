import { ADD_DATA, DELETE_DATA, EDIT_DATA } from './types'

const InithialData = []

export const dataReducer = (data = InithialData, action) => {
    switch(action.type){
        case ADD_DATA :
            return [...data, action.payload]
        case DELETE_DATA :
            let dataArr = [...data]
            let deletedData = dataArr.filter((d) => d.id !== action.payload)
            return deletedData
        case EDIT_DATA :
            let dataArr2 = [...data]
            let editedData = dataArr2.find((d) => d.id === action.payload.id)
            editedData['title'] = action.payload.title
            editedData['description'] = action.payload.description
            return dataArr2
        default :
            return data;
    }
}