import { GET_DATA } from './types'

const InithialData = {
   data: []
}

export const dataReducer = (state = InithialData, action) => {
    switch(action.type){
        case GET_DATA :
            return action.payload
        default :
            return state;
    }
}