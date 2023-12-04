import * as type from '../types/loginType';


const initialState = {
    user : null,
    login : null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_SUCCESS :{
            return {...state, login: action.payload };
        }
        case type.LOGIN_FAILED :{
            return {...state, login: action.payload };
        }
        case type.GENERATE_OTP_SUCCESS :{
            return {...state, user: action.payload };
        }
        case type.GENERATE_OTP_FAILDE :{
            return {...state, user: action.payload };
        }
        case type.OTP_VERIFICATION_SUCCESS :{
            return {...state, user: action.payload };
        }
        case type.OTP_VERIFICATION_FAILDE :{
            return {...state, user: action.payload };
        }
        default:
            return state
    }
}
    

export default loginReducer;