import * as type from '../types/productsType'

export function fetchProductsAction(){
    
    return {
        type: type.FETCH_PRODUCTS_DATA,
        // payload: data
    }
}

export function productDetailsAction(data){
    
    return {
        type: type.FETCH_PRODUCTS_DETAILS,
        payload: data
    }
}

export function fetchFilterProductsAction(data){
    
    return {
        type: type.FETCH_FILTER_PRODUCTS_DATA,
        payload: data
    }
}

export function fetchNewArrivalProductsAction(){
    
    return {
        type: type.FETCH_NEW_ARRIVAL_PRODUCT,
        // payload: data
    }
}