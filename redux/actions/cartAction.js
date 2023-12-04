import * as type from '../types/addtocart'

export function viewCartAction(){
    
    return {
        type: type.ACTIVE_CART_VIEW,
        // payload: data
    }
}


export function addCartAction(data){
    
    return {
        type: type.ADD_TO_CART,
        payload: data
    }
}


export function cartListAction(data){
    
    return {
        type: type.LIST_TO_CART,
        payload: data
    }
}


export function removeCartAction(data){

    return {
        type: type.REMOVE_TO_CART,
        payload: data
    }
}


export function updateCartAction(data){

    return {
        type: type.UPDATE_CART,
        payload: data
    }
}

export function clearCartAction(data){

    return {
        type: type.CLEAR_TO_CART,
        payload: data
    }
}

export function purchaseUnitAction(data){

    return {
        type: type.UNIT_OF_PURCHASE,
        payload: data
    }
}


export function addWishlistAction(data){
    
    return {
        type: type.ADD_TO_WISHLIST,
        payload: data
    }
}

export function fetchWishlistAction(data){
    
    return {
        type: type.WISHLIST_LIST,
        payload: data
    }
}

export function removeWishlistAction(data){

    return {
        type: type.REMOVE_TO_WISHLIST,
        payload: data
    }
}