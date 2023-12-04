import * as type from '../types/loginType'

export function userLoginAction(data){
    
    return {
        type: type.LOGIN,
        payload: data
    }
}

export function sendUserOtpAction(data){
    return {
        type: type.GENERATE_OTP,
        payload: data
    }
}

export function userOtpVerificationAction(data){

    return {
        type: type.USER_OTP_VERIFICATION,
        payload: data
    }
}

export function refreshTokenAction(data){

    return {
        type: type.FETCH_REF_TOKEN,
        payload: data
    }
}

export const logout = () => ({
    type: type.LOGOUT,
})

