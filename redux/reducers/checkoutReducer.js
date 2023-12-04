import * as type from '../types/checkout';


const initialState = {
    checkout : null
}

const checoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_CHECKOUT_SUCCESS :{
            return {...state, checkout: action.payload };
        }
        case type.FETCH_CHECKOUT_FAILDE :{
            return {...state, checkout: null };
        }
        default:
            return state;
    }
}
    

export default checoutReducer;