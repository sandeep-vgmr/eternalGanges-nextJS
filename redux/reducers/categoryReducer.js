import * as type from '../types/categoriesType';


const initialState = {
    isLoading: false,
    categories : null,
    subCategories : null,
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.RESPONSE_CATEGORIES_DATA :{
            return {...state, categories: action.payload };
        }
        case type.FAILED_CATEGORIES_DATA :{
            return {...state, categories: action.payload };
        }
        case type.RESPONSE_SUB_CATEGORIES :{
            return {...state, subCategories: action.payload.product, isLoading: true };
        }
        case type.FAILED_SUB_CATEGORIES :{
            return {...state, error: action.payload, subCategories: [] };
        }
        default:
            return state;
    }
}
    

export default categoryReducer;