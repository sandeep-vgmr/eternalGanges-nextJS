import * as type from '../types/registerType';


const initialState = {
    user : null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_USER_RESPONSE :{
            const { data } = action.payload
            return {...state, user: data };
        }
        case type.FETCH_USER_FAILDE :{
            return {...state, user: action.payload };
        }
        case type.LOGOUT_RESPONSE :{
            return {...state, user: action.payload };
        }
        case type.LOGOUT_FAILED :{
            return {...state, user: action.payload };
        }
        default:
            return state
    }
}
    

export default userReducer;