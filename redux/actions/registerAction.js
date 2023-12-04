import * as type from '../types/registerType'

export function registerAction(data){
    
    return {
        type: type.USER_REGISTER,
        payload: data
    }
}

export function fetchUserAction(){
    
    return {
        type: type.FETCH_USER,
    }
}

export function fetchMasterAction(){
    
    return {
        type: type.FETCH_MASTER,
    }
}
