import * as type from '../types/registerType';


const initialState = {
    register : null,
    master: []
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.USER_REGISTER_SUCCESS :{
            return {...state, register: action.payload };
        }
        case type.USER_REGISTER_FAILDE :{
            return {...state, register: action.payload };
        }
        case type. FETCH_MASTER_RESPONSE:{
            const { data } = action.payload
            return {...state, master: data };
        }
        case type.FETCH_MASTER_FAILDE :{
            return {...state, master: action.payload };
        }
        default:
            return state
    }
}
    

export default registerReducer;