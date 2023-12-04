import * as type from '../types/addressType'

export function addAddressAction(data){
    
    return {
        type: type.ADD_ADDRESS,
        payload: data
    }
}

export function updateAddressAction(data){
    
    return {
        type: type.UPDATE_ADDRESS,
        payload: data
    }
}

export function removeAddressAction(data){
    
    return {
        type: type.REMOVE_ADDRESS,
        payload: data
    }
}


export function addShippingDetailsAction(data){

    return {
        type: type.SHIPPING_DETAILS,
        payload: data
    }
}

export function lastOrderIdAction(data){

    return {
        type: type.LAST_ORDER_ID,
        payload: data
    }
}

export function fetchCouponListAction(data){
    return {
        type: type.FETCH_COUPON_LIST,
        payload: data
    }
}


export function applyCouponAction(data){
    return {
        type: type.APPLY_COUPON,
        payload: data
    }
}

export function fetchAddressListAction(data){

    return {
        type: type.EETCH_ADDRESS,
        payload: data
    }
}


export function fetchCountryStateAction(){

    return {
        type: type.FETCH_COUNTRY_DATA,
    }
}

export function fetchCityAction(data){
    
    return {
        type: type.FETCH_CITY,
        payload: data
    }
}
