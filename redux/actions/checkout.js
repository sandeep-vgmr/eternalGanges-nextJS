import * as type from '../types/checkout'

export function fetchCheckOutAction(){
    
    return {
        type: type.FETCH_CHECKOUT,
    }
}